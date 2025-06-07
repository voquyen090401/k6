#!/bin/sh

# Kiểm tra xem Go đã cài chưa
if ! command -v go > /dev/null 2>&1; then
  echo "Lỗi: Go chưa được cài đặt hoặc không có trong PATH."
  exit 1
fi

# Nếu chưa có file go.mod thì tạo module mới
if [ ! -f go.mod ]; then
  echo "Khởi tạo go module k6-xk6-build..."
  go mod init k6-xk6-build
fi

# Cài đặt plugin (thay đổi nếu cần)
echo "Đang cài đặt xk6-dashboard plugin..."
go install github.com/grafana/xk6-dashboard@latest

# Kiểm tra xem xk6 đã có chưa
if ! command -v xk6 > /dev/null 2>&1; then
  echo "Lỗi: xk6 chưa được cài đặt hoặc không có trong PATH."
  exit 1
fi

# Build k6 với plugin
echo "Đang build k6 với dashboard plugin..."
xk6 build --with github.com/grafana/xk6-dashboard@latest

echo "Build k6 với dashboard plugin đã hoàn tất."
