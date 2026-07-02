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
      q: 'Các tổ chức độc quyền sử dụng giá cả độc quyền để?',
      options: [
        'Củng cố vai trò tổ chức độc quyền',
        'Chiếm đoạt giá trị thặng dư của người khác',
        'Gây thiệt hại cho đối thủ cạnh tranh',
        'Bình ổn giá cả thị trường',
      ],
      answer: 1,
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
      options: [
        'Ba nguyên nhân',
        'Bốn nguyên nhân',
        'Năm nguyên nhân',
        'Sáu nguyên nhân',
      ],
      answer: 1,
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
      q: 'Mục đích hình thành độc quyền nhà nước trong chủ nghĩa tư bản là?',
      options: [
        'Phục vụ lợi ích của các tổ chức độc quyền tư nhân',
        'Phục vụ lợi ích của mọi tầng lớp nhân dân',
        'Tiếp tục duy trì và phát triển chủ nghĩa tư bản',
        'Lật đổ chủ nghĩa xã hội',
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
  ],

  hard: [
    {
      q: 'Độc quyền nhà nước trong chủ nghĩa tư bản, sở hữu nhà nước thực hiện chức năng nào?',
      options: [
        'Mở rộng sản xuất tư bản chủ nghĩa',
        'Tạo điều kiện di chuyển tư bản giữa các ngành',
        'Làm chỗ dựa cho sự điều tiết kinh tế nhà nước',
        'Tất cả các phương án trên',
      ],
      answer: 3,
    },
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
      q: 'Đâu là giới hạn lịch sử của chủ nghĩa tư bản?',
      options: [
        'Mục đích sản xuất vẫn phục vụ lợi ích của thiểu số giai cấp tư sản',
        'Thúc đẩy lực lượng sản xuất phát triển',
        'Chuyển sản xuất nhỏ thành sản xuất lớn',
        'Xã hội hóa sản xuất',
      ],
      answer: 0,
    },
  ],
}
