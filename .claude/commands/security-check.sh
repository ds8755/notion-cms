#!/bin/bash

# 보안 취약점 체크 커맨드
# TypeScript/JavaScript 프로젝트의 일반적인 보안 취약점을 검사합니다

echo "🔒 보안 취약점 체크 시작..."
echo ""

# 체크 결과 저장
warnings=0
errors=0

# 색상 정의
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 1. eval() 사용 체크
echo -e "${BLUE}📋 1. eval() 사용 체크${NC}"
if grep -r "eval(" --include="*.js" --include="*.ts" --include="*.jsx" --include="*.tsx" . 2>/dev/null | grep -v node_modules | grep -v ".next"; then
    echo -e "${RED}❌ eval() 함수 사용 발견${NC}"
    errors=$((errors + 1))
else
    echo -e "${GREEN}✓ eval() 사용 없음${NC}"
fi
echo ""

# 2. innerHTML 직접 할당 체크
echo -e "${BLUE}📋 2. innerHTML 직접 할당 체크${NC}"
if grep -r "\.innerHTML\s*=" --include="*.js" --include="*.ts" --include="*.jsx" --include="*.tsx" . 2>/dev/null | grep -v node_modules | grep -v ".next"; then
    echo -e "${YELLOW}⚠️  innerHTML 직접 할당 발견${NC}"
    warnings=$((warnings + 1))
else
    echo -e "${GREEN}✓ innerHTML 안전한 사용${NC}"
fi
echo ""

# 3. 환경 변수 노출 체크
echo -e "${BLUE}📋 3. API 키/비밀키 하드코딩 체크${NC}"
if grep -r "apiKey\|API_KEY\|secret\|password" --include="*.js" --include="*.ts" --include="*.jsx" --include="*.tsx" . 2>/dev/null | grep -v node_modules | grep -v ".next" | grep -v "process.env" | grep -v "import" | head -5; then
    echo -e "${YELLOW}⚠️  하드코딩된 키/비밀값이 있을 수 있습니다${NC}"
    warnings=$((warnings + 1))
else
    echo -e "${GREEN}✓ 환경변수 적절히 사용 중${NC}"
fi
echo ""

# 4. package.json 의존성 취약점 체크
echo -e "${BLUE}📋 4. npm 의존성 취약점 체크${NC}"
if [ -f "package.json" ]; then
    if command -v npm &> /dev/null; then
        npm audit --audit-level=moderate 2>/dev/null > /dev/null
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✓ 의존성 보안 양호${NC}"
        else
            echo -e "${YELLOW}⚠️  npm audit 취약점 발견${NC}"
            echo "더 자세한 정보: npm audit"
            warnings=$((warnings + 1))
        fi
    else
        echo -e "${YELLOW}⚠️  npm이 설치되어 있지 않습니다${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  package.json 파일이 없습니다${NC}"
fi
echo ""

# 5. CORS 설정 체크
echo -e "${BLUE}📋 5. CORS 설정 체크${NC}"
if grep -r "cors()" --include="*.js" --include="*.ts" . 2>/dev/null | grep -v node_modules | grep -v ".next"; then
    echo -e "${YELLOW}⚠️  CORS 설정이 있습니다. 설정 확인 필요${NC}"
    warnings=$((warnings + 1))
else
    echo -e "${GREEN}✓ CORS 설정 없음${NC}"
fi
echo ""

# 6. .env 파일 체크
echo -e "${BLUE}📋 6. .env 파일 상태 체크${NC}"
if [ -f ".env" ] || [ -f ".env.local" ]; then
    echo -e "${YELLOW}⚠️  .env 파일이 존재합니다. .gitignore에 추가 확인${NC}"
    if grep -q "\.env" .gitignore 2>/dev/null; then
        echo -e "${GREEN}✓ .env가 .gitignore에 등록됨${NC}"
    else
        echo -e "${RED}❌ .env가 .gitignore에 등록되지 않음${NC}"
        errors=$((errors + 1))
    fi
else
    echo -e "${GREEN}✓ .env 파일 없음${NC}"
fi
echo ""

# 7. SQL 쿼리 문자열 연결 체크
echo -e "${BLUE}📋 7. SQL 인젝션 위험 패턴 체크${NC}"
if grep -r "SELECT.*\+" --include="*.js" --include="*.ts" . 2>/dev/null | grep -v node_modules | grep -v ".next"; then
    echo -e "${YELLOW}⚠️  SQL 쿼리 문자열 연결 발견${NC}"
    warnings=$((warnings + 1))
else
    echo -e "${GREEN}✓ 준비된 쿼리 사용 중${NC}"
fi
echo ""

# 8. TypeScript strict 모드 체크
echo -e "${BLUE}📋 8. TypeScript strict 모드 체크${NC}"
if [ -f "tsconfig.json" ]; then
    if grep -q '"strict":\s*true' tsconfig.json; then
        echo -e "${GREEN}✓ TypeScript strict 모드 활성화${NC}"
    else
        echo -e "${YELLOW}⚠️  TypeScript strict 모드 비활성화${NC}"
        warnings=$((warnings + 1))
    fi
else
    echo -e "${YELLOW}⚠️  tsconfig.json 파일이 없습니다${NC}"
fi
echo ""

# 결과 요약
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}📊 보안 체크 결과${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "심각한 문제: ${RED}${errors}${NC}"
echo -e "경고사항: ${YELLOW}${warnings}${NC}"
echo ""

if [ $errors -eq 0 ] && [ $warnings -eq 0 ]; then
    echo -e "${GREEN}✅ 보안 체크 통과!${NC}"
    exit 0
elif [ $errors -eq 0 ]; then
    echo -e "${YELLOW}⚠️  경고사항을 확인하세요${NC}"
    exit 0
else
    echo -e "${RED}❌ 심각한 보안 문제를 해결하세요${NC}"
    exit 1
fi
