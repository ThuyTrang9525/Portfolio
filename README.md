# Portfolio Website

Portfolio cá nhân đẹp mắt được xây dựng với HTML, CSS, và JavaScript thuần, sử dụng kiến trúc component modular. Hoàn hảo cho GitHub Pages!

## ✨ Tính năng

- 🎨 Thiết kế hiện đại và responsive
- 📱 Mobile-friendly
- ⚡ Hiệu suất cao
- 🎭 Animations mượt mà
- 💼 Sections đầy đủ: Hero, About, Skills, Projects, Contact
- 🧩 Kiến trúc component modular - dễ bảo trì
- 🌐 Dễ dàng tùy chỉnh

## 🚀 Cài đặt cho GitHub Pages

### Cách 1: Upload trực tiếp

1. Tạo repository mới trên GitHub với tên: `username.github.io` (thay `username` bằng GitHub username của bạn)
2. Upload tất cả files và folders vào repository
3. Vào Settings > Pages
4. Chọn source là `main` branch
5. Website của bạn sẽ có tại: `https://username.github.io`

### Cách 2: Git Command Line

\`\`\`bash
# Clone repository
git clone https://github.com/username/username.github.io.git
cd username.github.io

# Copy files vào thư mục
# Sau đó:
git add .
git commit -m "Initial portfolio commit"
git push origin main
\`\`\`

## 🎨 Tùy chỉnh

### Thay đổi thông tin cá nhân

1. **Các component trong thư mục `components/`**:
   - `components/nav.html` - Navigation bar
   - `components/hero.html` - Hero section với tên và giới thiệu
   - `components/about.html` - Thông tin về bạn
   - `components/skills.html` - Kỹ năng và công nghệ
   - `components/projects.html` - Dự án nổi bật
   - `components/contact.html` - Thông tin liên hệ (email, số điện thoại, địa chỉ)
   - `components/footer.html` - Footer

2. **Thay đổi màu sắc trong `styles.css`**:
\`\`\`css
:root {
    --primary: #2563eb;        /* Màu chủ đạo */
    --primary-dark: #1e40af;   /* Màu chủ đạo đậm */
    --secondary: #10b981;      /* Màu phụ */
}
\`\`\`

3. **Thêm/Xóa dự án**:
   - Mở `components/projects.html`
   - Copy một `.project-card`
   - Thay đổi hình ảnh, tiêu đề, mô tả và tags

4. **Cập nhật kỹ năng**:
   - Mở `components/skills.html`
   - Thay đổi `--progress` trong các `.skill-progress` để điều chỉnh phần trăm

### Thay đổi hình ảnh

Thay thế các placeholder images:
- Đặt hình ảnh của bạn vào thư mục dự án
- Cập nhật đường dẫn `src` trong các file component

## 📂 Cấu trúc thư mục

\`\`\`
portfolio/
├── components/            # HTML components
│   ├── nav.html          # Navigation
│   ├── hero.html         # Hero section
│   ├── about.html        # About section
│   ├── skills.html       # Skills section
│   ├── projects.html     # Projects section
│   ├── contact.html      # Contact section
│   └── footer.html       # Footer
├── js/                   # JavaScript files
│   └── component-loader.js  # Component loading logic
├── index.html            # HTML chính (chỉ containers)
├── styles.css            # CSS styling
├── script.js             # JavaScript functionality
└── README.md            # Tài liệu
\`\`\`

## 🧩 Kiến trúc Component

Website sử dụng kiến trúc modular với component loader:
- Mỗi section là một file HTML riêng biệt
- `component-loader.js` tự động load tất cả components vào trang
- `script.js` khởi tạo sau khi components được load xong
- Dễ dàng thêm/xóa/sửa từng component độc lập

## 💡 Tips

- **SEO**: Cập nhật thẻ `<meta>` trong `index.html` để tối ưu SEO
- **Favicon**: Thêm favicon.ico vào thư mục root
- **Analytics**: Thêm Google Analytics để theo dõi traffic
- **Contact Form**: Tích hợp với FormSpree hoặc EmailJS để form hoạt động thực sự

## 🛠️ Công nghệ sử dụng

- HTML5
- CSS3 (với CSS Variables & Grid/Flexbox)
- Vanilla JavaScript (ES6+)
- Fetch API (cho component loading)
- Intersection Observer API
- Smooth Scroll

## 📱 Responsive Breakpoints

- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: ≤ 480px

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

Free to use - Customize as you like!

## 🤝 Contributing

Mọi đóng góp đều được hoan nghênh! Hãy tạo pull request hoặc mở issue.

---

**Made with ❤️ for GitHub Pages**
</markdown>
