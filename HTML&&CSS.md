# Training-FE
#HTML là gì
- HTMl là chữ viết tắt của Hypertext Markup Language. giúp users tạo cấu trúc của trang web, ứng dụng.

#CSS là gì
- CSS là ngôn ngữ tạo phong cách cho trang web - Cascading Style Sheet languages, dùng để tạo phong cách và định kiểu cho những yếu tố được viết dưới dạng nn đánh dấu, như HTML.

#Cấu trúc cơ bản của trang HTML có dạng như sau, thường gồm 3 phần:
<!Doctype>: Phần khai báo chuẩn của html hay xhtml.
<head></head>: Phần khai báo ban đầu, khai báo về meta, title, css, javascript…
<body></body>: Phần chứa nội dung của trang web, nơi hiển thị nội dung.

#cú pháp comment trong HTML
<!--phần thân comment-->

#Các thẻ html thông dụng
<h1> - <h6>: Tạo những đề mục quan trọng trong trang web
<p>: Xác định một đoạn văn bản
<img>: chèn ảnh vào trang html qua ttinh src
<a>: chèn link (anchor) vào trong html qua ttinh href
<ul>: Xác định một danh sách không có thứ tự
<ol>: Xác định một danh sách có thứ tự
<li>: Xác định một "danh mục" trong danh sách
<table>	Xác định phần tử là một cái bảng
<tr> xác định phần tử một hàng trong bảng
<td> xác định ptu 1 ô trong bảng
<input>: cho phép hiển thị các trường nhập dữ liệu với các kiểu text, radio, checkbox,...
<button> tạo nút

#Attributes trong html
- là các thuộc tính của thẻ html ví dụ href, height, type,....

#Các cách sử sử CSS
- Internal: sử dụng ngay trong file.html qua thẻ <style>
- External: tách file.css thành 1 file riêng và sử dụng qua thẻ <link/>
- Inline: sử dụng ngay trong element của html qua thuộc tính style

#Id và class css selector
id: sử dụng selector #
class: sử dụng selector .

#Độ ưu tiên CSS
inline> #id> .class> tag name

#CSS Variable
dùng :root selector để khai báo biến CSS toàn cục
dùng --tên biến để khai báo biến CSS
dùng var() để chèn giá trị của 1 biến CSS


#CSS units: Các đơn vị trong CSS
- CSS có vài unit để biểu diễn độ dài
- Nhiều thuộc tính CSS lấy các giá trị "độ dài", chẳng hạn như width, margin, padding, font-size, ...
1. Absolute units: Cố định và độ dài được biểu thị bằng bất kỳ đơn vị nào trong số này sẽ xuất hiện chính xác với kích thước đó
cm	centimeters
mm	millimeters
in	inches (1in = 96px = 2.54cm)
px *	pixels (1px = 1/96th of 1in)
pt	points (1pt = 1/72 of 1in)
pc	picas (1pc = 12 pt)

2. Relative units: chỉ định độ dài tương ứng với thuộc tính độ dài khác.
- em : em Liên quan đến kích thước phông chữ của phần tử (2em có nghĩa là gấp 2 lần kích thước phông chữ hiện tại)
- ex: Liên quan đến chiều cao x của phông chữ hiện tại (hiếm khi được sử dụng)
- ch: Liên quan đến chiều rộng của "0" (không)
- rem: Liên quan đến kích thước phông chữ của phần tử gốc
- vw: Tương ứng với 1% chiều rộng của khung nhìn*
- vh: Tương ứng với 1% chiều cao của khung nhìn*
- vmin: Tương đối với 1% kích thước nhỏ hơn của khung nhìn*
- vmax: Relative to 1% of viewport's* larger dimension
- %:  so với phần tử gốc

#Box Model
- CSS padding: được sử dụng để tạo không gian xung quanh nội dung của phần tử, bên trong bất kỳ đường viền được xác định nào.
+ có thể padding top, right, bottom, left
+ cú pháp short-hand: x<top bottom> y<right left>, x<trbl>
- CSS border:  cho phép bạn chỉ định kiểu, chiều rộng và màu sắc của đường viền của một phần tử.
+ border-style: chỉ định loại đường viền sẽ hiển thị ví dụ như dotted, dashed, solid, double,..
+ border-width: chỉ định độ dài của đường viền
+ border-color: chỉ định màu đường viền
+ border-radius: chỉ định độ bo tròn của đường viền
cú pháp short-hand: border: 1px solid black.

- CSS margin: được sử dụng để tạo không gian xung quanh các phần tử, bên ngoài bất kỳ đường viền xác định nào.
+ gồm margin top, right, left, bottom

#CSS Box sizing
- Box sizing  cho phép chúng ta bao gồm padding và border trong tổng chiều rộng và chiều cao của một phần tử.
Theo mặc định, chiều rộng và chiều cao của một phần tử được tính như sau: chiều rộng + phần đệm + đường viền = chiều rộng thực tế của phần tử chiều cao + phần đệm + đường viền = chiều cao thực tế của một phần tử Điều này có nghĩa là: Khi bạn đặt chiều rộng/chiều cao của một phần tử , phần tử thường xuất hiện lớn hơn mức bạn đã đặt (vì đường viền và phần đệm của phần tử được thêm vào chiều rộng/chiều cao được chỉ định của phần tử).

#CSS Background Image
- Thuộc tính background-image chỉ định một hình ảnh được sử dụng làm nền của một phần tử.
- background-size: xác định kích thước của nền
- background-repeat: xác định background có được lặp lại không

#CSS Pseudo classes: lớp giả trong CSS
- Một lớp giả được sử dụng để xác định trạng thái đặc biệt của một phần tử.
- các lớp giả thường được sử dụng: hover, active,...

#CSS Pseudo classes: Phần tử giả trong CSS
- Phần tử giả CSS được sử dụng để tạo kiểu cho các phần cụ thể của phần tử.
+ ::first-line: được sử dụng để thêm kiểu đặc biệt cho dòng đầu tiên của văn bản.
+ ::first-letter: được sử dụng để thêm kiểu đặc biệt cho chữ cái đầu tiên của văn bản.
+ ::before: có thể được sử dụng để chèn một số nội dung trước nội dung của một phần tử.
+ ::after: được sử dụng để chèn một số nội dung sau nội dung của một phần tử.

#Position CSS
- position chỉ định loại phương pháp định vị được sử dụng cho một phần tử (static, relative, fixed, absolute or sticky)
+ static: không bị ảnh hưởng bởi các thuộc tính top, bottom, right, left.
+ relative: được định vị so với vị trí bình thường của nó, nội dung có thể được điều chỉnh bởi top, bottom, right, left.
+ absolute: được định vị tương đối so với element cha được định vị gần nhất, nếu element cha không có thuộc tính position nó sẽ được định vị theo nội dung tài liệu
+ fixed: được định vị tương ứng với khung nhìn, có nghĩa là nó luôn ở cùng một vị trí ngay cả khi trang được cuộn.
+ sticky: đđược định vị dựa trên vị trí cuộn của người dùng

