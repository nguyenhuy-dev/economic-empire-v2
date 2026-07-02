// Quiz tạo vốn — 3 độ khó. Càng khó: đúng thưởng càng cao NHƯNG sai an ủi càng ít
// (mạo hiểm cao/đền bù thấp). Dễ thì ngược lại: thưởng thấp nhưng sai vẫn được nhiều.
export const difficulties = [
  { id: 'easy', label: 'Dễ', reward: 4, failReward: 3, time: 15, color: '#22c55e' },
  { id: 'medium', label: 'Vừa', reward: 8, failReward: 2, time: 15, color: '#f59e0b' },
  { id: 'hard', label: 'Khó', reward: 14, failReward: 1, time: 15, color: '#ef4444' },
]

export const quizQuestions = {
  easy: [
    {
      q: 'Biểu hiện mới của sự phân chia thị trường giữa các liên minh độc quyền đó là?',
      options: [
        'Hình thành các tổ chức đa quốc gia',
        'Hình thành các tổ chức độc quyền trong nhà nước tư bản',
        'Hình thành xu hướng khu vực hóa',
        'Hình thành xu hướng toàn cầu hóa',
      ],
      answer: 2,
    },
    {
      q: 'Hiện nay, do sự phát triển của lực lượng sản xuất và khoa học công nghệ đã hình thành các tổ chức độc quyền mới là?',
      options: [
        'Concern và Conglomerate',
        'Concern và Syndicate',
        'Concern và Trust',
        'Concern, Conglomerate và Consortium',
      ],
      answer: 0,
    },
    {
      q: 'Biểu hiện mới của độc quyền ở phương diện tích tụ và tập trung tư bản là gì?',
      options: [
        'Vai trò to lớn của tư bản tài chính trong các tập đoàn độc quyền',
        'Sự xuất hiện các công ty độc quyền xuyên quốc gia bên cạnh sự phát triển của các xí nghiệp vừa và nhỏ',
        'Quốc tế hóa, toàn cầu hóa và khu vực hóa kinh tế',
        'Hợp tác, chuyển giao công nghệ cốt lõi',
      ],
      answer: 1,
    },
    {
      q: 'Biểu hiện mới của tích tụ và tập trung tư bản trong giai đoạn hiện nay là?',
      options: [
        'Sự xuất hiện của các công ty độc quyền xuyên quốc gia',
        'Sự bành trướng lãnh thổ',
        'Sự tranh giành, xung đột lợi ích về kinh tế',
        'Sự xung đột về chính trị',
      ],
      answer: 0,
    },
    {
      q: 'Những biểu hiện của độc quyền nhà nước trong chủ nghĩa tư bản là?',
      options: [
        'Sự kết hợp về nhân sự giữa tổ chức độc quyền với nhà nước; sự hình thành sở hữu nhà nước',
        'Sự kết hợp về nhân sự giữa tổ chức độc quyền với nhà nước; sự hình thành và phát triển sở hữu nhà nước; sự điều tiết kinh tế của nhà nước tư sản',
        'Sự kết hợp về nhân sự giữa tổ chức độc quyền với nhà nước; sự điều tiết kinh tế đối ngoại của nhà nước tư sản',
        'Sự kết hợp về nhân sự giữa tổ chức độc quyền với nhà nước; sự điều tiết kinh tế của nhà nước',
      ],
      answer: 1,
    },
    {
      q: 'Độc quyền nhà nước trong chủ nghĩa tư bản là sự liên minh giữa nhà nước tư bản với?',
      options: [
        'Các tổ chức nhà nước',
        'Các tổ chức độc quyền',
        'Các tổ chức kinh tế tư nhân',
        'Các tổ chức xã hội',
      ],
      answer: 1,
    },
    {
      q: 'Mục đích hình thành độc quyền nhà nước trong chủ nghĩa tư bản là?',
      options: [
        'Phục vụ lợi ích của các tổ chức độc quyền tư nhân và tiếp tục duy trì, phát triển chủ nghĩa tư bản',
        'Phục vụ lợi ích của mọi tầng lớp nhân dân',
        'Xóa bỏ chủ nghĩa tư bản',
        'Lật đổ chủ nghĩa xã hội',
      ],
      answer: 0,
    },
    {
      q: 'Chủ nghĩa tư bản độc quyền được xem là?',
      options: [
        'Một phương thức sản xuất',
        'Một giai đoạn phát triển của phương thức sản xuất tư bản chủ nghĩa',
        'Một hình thái kinh tế - xã hội',
        'Thời kỳ quá độ lên chủ nghĩa xã hội',
      ],
      answer: 1,
    },
    {
      q: 'Các tổ chức độc quyền sử dụng giá cả độc quyền để?',
      options: [
        'Củng cố vai trò tổ chức độc quyền',
        'Chiếm đoạt giá trị thặng dư của người khác',
        'Gây thiệt hại cho đối thủ cạnh tranh',
        'Bình ổn giá cả thị trường',
      ],
      answer: 1,
    },
    {
      q: 'Đâu là tổ chức độc quyền mới xuất hiện trong điều kiện hiện nay?',
      options: ['Cartel', 'Syndicate', 'Trust', 'Conglomerate'],
      answer: 3,
    },
    {
      q: 'Vai trò lịch sử của chủ nghĩa tư bản là?',
      options: [
        'Thúc đẩy lực lượng sản xuất phát triển',
        'Xã hội hóa sản xuất',
        'Tạo tiền đề vật chất cho xã hội mới',
        'Tất cả các phương án trên',
      ],
      answer: 3,
    },
  ],

  medium: [
    {
      q: 'Cơ chế kinh tế của độc quyền nhà nước trong chủ nghĩa tư bản gồm?',
      options: [
        'Cơ chế thị trường, độc quyền tư nhân và sự can thiệp của nhà nước',
        'Cơ chế thị trường, các nhà tài phiệt và sự điều tiết của nhà nước',
        'Cơ chế thị trường và độc quyền tư nhân',
        'Cơ chế kế hoạch hóa tập trung',
      ],
      answer: 0,
    },
    {
      q: 'Có mấy nguyên nhân chính dẫn đến sự hình thành độc quyền nhà nước trong chủ nghĩa tư bản?',
      options: ['Ba nguyên nhân', 'Bốn nguyên nhân', 'Năm nguyên nhân', 'Sáu nguyên nhân'],
      answer: 1,
    },
    {
      q: 'Độc quyền nhà nước trong chủ nghĩa tư bản, sở hữu nhà nước thực hiện chức năng nào?',
      options: [
        'Mở rộng sản xuất tư bản chủ nghĩa',
        'Tạo điều kiện di chuyển tư bản giữa các ngành',
        'Làm chỗ dựa cho sự điều tiết kinh tế nhà nước',
        'Tất cả phương án trên',
      ],
      answer: 3,
    },
    {
      q: 'Vì sao trong chủ nghĩa tư bản độc quyền cạnh tranh không bị thủ tiêu?',
      options: [
        'Vì cạnh tranh là quy luật khách quan của kinh tế hàng hóa',
        'Vì chỉ còn cạnh tranh giữa các doanh nghiệp nhỏ',
        'Vì các doanh nghiệp nhà nước cạnh tranh với nhau',
        'Vì nhà nước cấm độc quyền hoàn toàn',
      ],
      answer: 0,
    },
    {
      q: '"Tư bản tài chính" là kết quả của sự hợp nhất giữa?',
      options: [
        'Tư bản công nghiệp và tư bản thương nghiệp',
        'Tư bản ngân hàng và tư bản thương nghiệp',
        'Tư bản ngân hàng với tư bản công nghiệp độc quyền',
        'Tư bản nhà nước với tư bản tư nhân',
      ],
      answer: 2,
    },
    {
      q: 'Biểu hiện mới của độc quyền trong lĩnh vực tư bản tài chính là?',
      options: [
        'Vai trò của tư bản tài chính ngày càng lớn trong các tập đoàn độc quyền',
        'Tư bản tài chính giảm vai trò',
        'Ngân hàng không còn ảnh hưởng đến doanh nghiệp',
        'Tư bản tài chính bị thay thế hoàn toàn bởi tiền điện tử',
      ],
      answer: 0,
    },
    {
      q: 'Xu hướng quốc tế hóa sản xuất làm xuất hiện?',
      options: [
        'Doanh nghiệp địa phương quy mô nhỏ',
        'Công ty xuyên quốc gia và đa quốc gia',
        'Hợp tác xã nông nghiệp',
        'Doanh nghiệp nhà nước',
      ],
      answer: 1,
    },
    {
      q: 'Biểu hiện mới của sự phân chia thị trường hiện nay gắn với quá trình nào?',
      options: [
        'Phi toàn cầu hóa',
        'Cô lập kinh tế',
        'Đóng cửa thị trường',
        'Toàn cầu hóa và khu vực hóa',
      ],
      answer: 3,
    },
    {
      q: 'Giới hạn lịch sử của chủ nghĩa tư bản là?',
      options: [
        'Mục đích sản xuất vẫn phục vụ lợi ích của thiểu số giai cấp tư sản',
        'Thúc đẩy lực lượng sản xuất phát triển',
        'Chuyển sản xuất nhỏ thành sản xuất lớn',
        'Xã hội hóa sản xuất',
      ],
      answer: 0,
    },
    {
      q: 'Xu hướng nổi bật của các tập đoàn độc quyền hiện nay là?',
      options: [
        'Thu hẹp quy mô hoạt động',
        'Mở rộng đầu tư xuyên quốc gia',
        'Chỉ đầu tư trong nước',
        'Hạn chế ứng dụng công nghệ',
      ],
      answer: 1,
    },
    {
      q: 'Vai trò của Nhà nước trong chủ nghĩa tư bản hiện đại là?',
      options: [
        'Không can thiệp vào nền kinh tế',
        'Xóa bỏ cơ chế thị trường',
        'Điều tiết nền kinh tế nhằm phục vụ lợi ích của các tổ chức độc quyền',
        'Quốc hữu hóa toàn bộ nền kinh tế',
      ],
      answer: 2,
    },
    {
      q: 'Vì sao các công ty xuyên quốc gia ngày càng phát triển?',
      options: [
        'Do dân số tăng nhanh',
        'Do toàn cầu hóa và sự phát triển của khoa học - công nghệ',
        'Do giảm thương mại quốc tế',
        'Do nền kinh tế khép kín',
      ],
      answer: 1,
    },
  ],

  hard: [
    {
      q: 'Những đặc điểm kinh tế cơ bản nhất của chủ nghĩa tư bản độc quyền gồm?',
      options: [
        'Tập trung sản xuất; tư bản tài chính; xuất khẩu tư bản; phân chia lãnh thổ',
        'Tập trung sản xuất; tư bản tài chính; phân chia thị trường; phân chia lãnh thổ',
        'Tập trung sản xuất; xuất khẩu tư bản; phân chia thị trường; phân chia lãnh thổ',
        'Tập trung sản xuất và các tổ chức độc quyền; tư bản tài chính; xuất khẩu tư bản; phân chia thị trường thế giới; phân chia lãnh thổ thế giới',
      ],
      answer: 3,
    },
    {
      q: 'Độc quyền ngày nay có xu hướng phát triển theo mô hình nào?',
      options: [
        'Chỉ hoạt động trong một ngành',
        'Chỉ hoạt động trong phạm vi quốc gia',
        'Đa ngành, đa lĩnh vực và xuyên quốc gia',
        'Chỉ tập trung vào sản xuất',
      ],
      answer: 2,
    },
    {
      q: 'Trong điều kiện hiện nay, cạnh tranh giữa các tập đoàn độc quyền diễn ra chủ yếu trên lĩnh vực nào?',
      options: ['Công nghệ', 'Tài chính', 'Thị trường quốc tế', 'Tất cả các phương án trên'],
      answer: 3,
    },
    {
      q: 'Biểu hiện mới của độc quyền trong bối cảnh cách mạng công nghiệp 4.0 là?',
      options: [
        'Độc quyền tài nguyên thiên nhiên',
        'Độc quyền lao động giản đơn',
        'Độc quyền đất đai',
        'Độc quyền công nghệ, dữ liệu và nền tảng số',
      ],
      answer: 3,
    },
    {
      q: 'Biểu hiện mới của độc quyền hiện nay cho thấy điều gì?',
      options: [
        'Chủ nghĩa tư bản luôn thích nghi để duy trì sự thống trị của tư bản độc quyền',
        'Độc quyền đã bị xóa bỏ',
        'Cạnh tranh không còn tồn tại',
        'Nhà nước không còn vai trò kinh tế',
      ],
      answer: 0,
    },
    {
      q: 'Trong chủ nghĩa tư bản hiện đại, Nhà nước và các tổ chức độc quyền có mối quan hệ như thế nào?',
      options: [
        'Đối lập hoàn toàn',
        'Không liên quan',
        'Gắn bó, hỗ trợ và tác động lẫn nhau để duy trì sự phát triển của chủ nghĩa tư bản',
        'Nhà nước kiểm soát hoàn toàn các tổ chức độc quyền',
      ],
      answer: 2,
    },
    {
      q: 'Điểm khác biệt nổi bật của độc quyền hiện nay so với đầu thế kỷ XX là?',
      options: [
        'Không còn tư bản tài chính',
        'Không còn cạnh tranh',
        'Chỉ còn doanh nghiệp nhà nước',
        'Phạm vi hoạt động mang tính toàn cầu, đa ngành và gắn với công nghệ cao',
      ],
      answer: 3,
    },
  ],
}
