📦 Cài đặt
#Yêu cầu máy tính
 - Có Golang >= 1.24.0
 - Node >= 16.18.1

## 🚀 Cách chạy
B1. Khởi tạo biểu đồ thống kê
- **Khởi tạo biểu đồ**  
  ```bash
  ./run.sh
- **Khởi tạo thông tin người dùng thật**  
  ```bash
  npm run init-users
- **Khởi tạo token**  
  ```bash
  npm run init-tokens
B2. Chạy các kiểu test khác nhau bằng npm scripts: http://localhost:5665

- **Smoke test**  
  ```bash
  npm run smoke
- **Load test**  
  ```bash
  npm run load
- **Smoke spike**  
  ```bash
  npm run spike
- **Smoke stress**  
  ```bash
  npm run stress