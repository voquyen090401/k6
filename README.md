📂 Cấu trúc thư mục

├── src/
│   ├── config/
│   │   └── testModes.js        // Cấu hình test
│   ├── modules/
│   │   ├── runModules.js       // Hàm chạy module
│   │   └── ...
│   ├── scenarios/
│   │   └── ...
│   └── main.js                 // File chạy chính
├── package.json
└── README.md

📦 Cài đặt

npm install

K6 được cài toàn cục trên máy bạn. Nếu chưa có:
# macOS
brew install k6

# Ubuntu/Debian
sudo apt install k6

# Windows
chạy installer từ: https://k6.io/docs/getting-started/installation


## 🚀 Cách chạy

Chạy các kiểu test khác nhau bằng npm scripts:

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