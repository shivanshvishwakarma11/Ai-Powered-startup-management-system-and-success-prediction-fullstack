
# StartupAI Backend

## Setup

1. Install Java 21
2. Install PostgreSQL
3. Create database:

CREATE DATABASE startup_ai;

4. Update database credentials in:
   src/main/resources/application.yml

5. Run backend:

mvn spring-boot:run

Backend:
http://localhost:8080

## Main APIs

/api/auth/login
/api/auth/register
/api/dashboard/overview
/api/dashboard/analytics
/api/predictor/analyze
/api/finance/reports
/api/team
/api/insights
