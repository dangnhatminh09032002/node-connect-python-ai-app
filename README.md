## 1: download python 3.7

<https://www.python.org/ftp/python/3.7.0/python-3.7.0-embed-amd64.zip>

## 2: Install dependencies

```text
// for linux
python3 -m pip install -r requirements.txt

// for Win
python -m pip install -r requirements.txt
```

Nếu lỗi hãy update pip rồi chạy lại

## 3: Cài đặt openvino-dev

```text
pip install openvino-dev[onnx,tensorflow2]==2022.1.0
```

```text
omz_downloader --list models.lst
```

## 4: Build C++ postprocess Python module (Optional)

tại folder ~/node-connect-python-ai-app/handwritten-japanese-ocr

```text
// for linux
  source setup_ocv_vars.sh
  ./build.sh
 
// for Win
  setup_ocv_vars.bat
  build.bat
```

## 5: Run nodejs

tại folder ~/node-connect-python-ai-app

```text
npm install

npm run start:dev
```

> NOTE: khi viết xong phải nhấn focus vào khung vẽ và nhấn một nút bất kỳ, kết quả sẽ được hiển thị ở terminal.

> NOTE: mỗi lần muốn chạy lại app có thể save một file .js bất kỳ hoặc chạy lại npm run start:dev.
