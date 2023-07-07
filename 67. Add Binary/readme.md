

>Để quy đổi một số từ hệ thập phân sang hệ nhị phân, bạn có thể sử dụng phép chia lấy dư. Dưới đây là một công thức để thực hiện quy đổi từ số thập phân (decimal) sang số nhị phân (binary):

- Bước 1: Chia số thập phân cho 2 và ghi lại phần nguyên (integer part) và phần dư (remainder).
- Bước 2: Lặp lại bước 1 cho đến khi số thập phân bằng 0.
- Bước 3: Ghi lại phần dư theo thứ tự từ trên xuống dưới. Đây là số nhị phân tương ứng với số thập phân ban đầu.

>Ví dụ: Chuyển đổi số thập phân 23 thành số nhị phân:

- Bước 1: 23 ÷ 2 = 11 dư 1
- Bước 2: 11 ÷ 2 = 5 dư 1
- Bước 3: 5 ÷ 2 = 2 dư 1
- Bước 4: 2 ÷ 2 = 1 dư 0
- Bước 5: 1 ÷ 2 = 0 dư 1

Kết quả là 23 được chuyển đổi thành 10111 trong hệ nhị phân.

>Để quy đổi từ số nhị phân sang số thập phân, bạn có thể sử dụng công thức sau:

>Số thập phân = (chữ số cuối cùng * 2^0) + (chữ số thứ hai từ cuối * 2^1) + (chữ số thứ ba từ cuối * 2^2) + ...


Ví dụ: Chuyển đổi số nhị phân 10111 thành số thập phân:

>> 1 * 2^0 + 1 * 2^1 + 1 * 2^2 + 0 * 2^3 + 1 * 2^4 = 1 + 2 + 4 + 0 + 16 = 23

Vậy số nhị phân 10111 tương ứng với số thập phân 23.


___

Để cộng hai số nhị phân, bạn có thể thực hiện tương tự như cách cộng các số thập phân bằng tay. Dưới đây là một hướng dẫn cách cộng hai số nhị phân:

Chuẩn bị hai số nhị phân dưới dạng các dãy bit có cùng độ dài. Nếu không có cùng độ dài, hãy thêm các số 0 vào đầu của số có độ dài ngắn hơn cho đến khi hai số có cùng độ dài.

Bắt đầu từ phải sang trái, cộng từng cặp bit tương ứng theo quy tắc sau:

0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 0 (và nhớ 1)
Ghi lại kết quả của phép cộng vào dãy bit kết quả.

Nếu có số nhớ (carry) từ phép cộng trước đó, hãy thêm số nhớ đó vào kết quả của phép cộng hiện tại.

Lặp lại bước 2 và bước 3 cho đến khi cộng hết tất cả các cặp bit tương ứng.

Nếu sau khi cộng xong mà còn có số nhớ, hãy thêm số nhớ đó vào đầu dãy bit kết quả.

Kiểm tra xem dãy bit kết quả có độ dài lớn hơn hai số ban đầu hay không. Nếu có, hãy thực hiện cắt bớt bit dư thừa ở đầu dãy.

Ví dụ: Cộng hai số nhị phân 10101 + 11010 = 101111 trong hệ nhị phân.

```
Để cộng hai số nhị phân 10101 và 11010, chúng ta thực hiện các bước sau:

Chuẩn bị hai số nhị phân dưới dạng các dãy bit có cùng độ dài:

10101 (độ dài 5)
11010 (độ dài 5)
Bắt đầu từ phải sang trái, cộng từng cặp bit tương ứng:

Bước 1: 1 + 0 = 1, ghi lại kết quả là 1.
Bước 2: 0 + 1 = 1, ghi lại kết quả là 1.
Bước 3: 1 + 0 = 1, ghi lại kết quả là 1.
Bước 4: 0 + 1 = 1, ghi lại kết quả là 1.
Bước 5: 1 + 1 = 0 (và nhớ 1), ghi lại kết quả là 0.
Không có số nhớ từ phép cộng trước đó, nên bước này bỏ qua.

Kết quả sau khi cộng từ phải sang trái là 01111.

Kiểm tra xem dãy bit kết quả có độ dài lớn hơn hai số ban đầu hay không. Trong ví dụ này, dãy bit kết quả có độ dài 5, giống như độ dài của hai số ban đầu, nên không cần thực hiện bước này.

Kết quả cuối cùng là 01111, tương ứng với số nhị phân 111 trong hệ thập phân.

Vậy, số nhị phân 10101 + 11010 = 111 trong hệ nhị phân.
```