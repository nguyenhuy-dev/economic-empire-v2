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
      q: 'Trong các nhà kinh điển của chủ nghĩa Mác - Lênin, ai là người khái quát về nguyên nhân ra đời của chủ nghĩa tư bản độc quyền bằng câu: "tự do cạnh tranh đẻ ra tập trung sản xuất và sự tập trung sản xuất này, khi phát triển tới một mức độ nhất định lại dẫn tới độc quyền"?',
      options: [
        'Các Mác',
        'Ph.Ăngghen',
        'V.I.Lênin',
        'Hồ Chí Minh',
      ],
      answer: 2,
    },
    {
      q: 'Điền vào chỗ trống để hoàn thành câu sau: "...đẻ ra tập trung sản xuất và sự tập trung sản xuất này, khi phát triển tới một mức độ nhất định, lại dẫn tới độc quyền"?',
      options: [
        'Tự do cạnh tranh',
        'Quy luật giá trị',
        'Tích lũy tư bản',
        'Xuất khẩu tư bản',
      ],
      answer: 0,
    },
    {
      q: 'Cuộc khủng hoảng nào đã làm phá sản doanh nghiệp vừa và nhỏ, các doanh nghiệp lớn còn tồn tại dẫn tới hình thành các doanh nghiệp độc quyền đầu tiên?',
      options: [
        'Khủng hoảng kinh tế năm 1825',
        'Khủng hoảng kinh tế năm 1873',
        'Khủng hoảng kinh tế năm 1929 - 1933',
        'Khủng hoảng kinh tế năm 2008',
      ],
      answer: 1,
    },
    {
      q: 'Chủ nghĩa tư bản độc quyền nhà nước hình thành rõ nét từ thời gian nào?',
      options: [
        'Đầu thế kỷ XIX',
        'Cuối thế kỷ XIX',
        'Giữa thế kỷ XX',
        'Đầu thế kỷ XXI',
      ],
      answer: 2,
    },
    {
      q: 'Sự phát triển của tư bản tài chính dẫn đến sự hình thành của tầng lớp nào?',
      options: [
        'Các nhà tài phiệt (trùm tài chính)',
        'Giai cấp tiểu tư sản',
        'Tầng lớp quý tộc mới',
        'Giai cấp công nhân hiện đại',
      ],
      answer: 0,
    },
    {
      q: 'Một trong những tác động tích cực của độc quyền đối với nền kinh tế đó là?',
      options: [
        'Tạo ra sự bình đẳng tuyệt đối giữa các doanh nghiệp',
        'Tập trung nguồn lực lớn nghiên cứu và phát triển khoa học - kỹ thuật',
        'Xóa bỏ hoàn toàn tình trạng khủng hoảng kinh tế',
        'Bình ổn giá cả hàng hóa tiêu dùng cho toàn xã hội',
      ],
      answer: 1,
    },
    {
      q: 'Độc quyền được hiểu là?',
      options: [
        'Sự cạnh tranh gay gắt giữa những người sản xuất nhỏ lẻ',
        'Sự liên minh giữa các doanh nghiệp lớn nhằm nắm giữ việc sản xuất và tiêu thụ hàng hóa để thu lợi nhuận độc quyền cao',
        'Sự quản lý toàn bộ nền kinh tế bởi một cơ quan duy nhất của nhà nước',
        'Việc một cá nhân tự sản xuất tự tiêu dùng không qua trao đổi',
      ],
      answer: 1,
    },
  ],

  medium: [
    {
      q: 'Về mặt lịch sử, các hình thức tổ chức độc quyền cơ bản phát triển từ thấp đến cao lần lượt là?',
      options: [
        'Syndicate - Cartel - Trust - Consortium',
        'Cartel - Syndicate - Trust - Consortium',
        'Trust - Cartel - Syndicate - Consortium',
        'Cartel - Trust - Syndicate - Consortium',
      ],
      answer: 1,
    },
    {
      q: 'Các hình thức độc quyền nào sau đây được coi là thấp nhất (lỏng lẻo nhất) về mặt liên minh?',
      options: [
        'Cartel',
        'Syndicate',
        'Trust',
        'Consortium',
      ],
      answer: 0,
    },
    {
      q: 'Giá cả độc quyền được hiểu là?',
      options: [
        'Giá cả hoàn toàn tuân theo sự điều tiết tự phát của cung cầu thị trường',
        'Giá cả do các tổ chức độc quyền áp đặt trong mua và bán để thu lợi nhuận độc quyền cao',
        'Giá cả do nhà nước ấn định dựa trên chi phí sản xuất trung bình',
        'Giá cả bằng đúng với giá trị của hàng hóa',
      ],
      answer: 1,
    },
    {
      q: 'Do có địa vị độc quyền, các tổ chức độc quyền áp đặt mức giá cả độc quyền như thế nào?',
      options: [
        'Giá cao khi mua nguyên liệu và giá thấp khi bán sản phẩm',
        'Giá thấp khi mua nguyên liệu và giá cao khi bán sản phẩm',
        'Giá bằng giá trị khi mua và bằng giá cả sản xuất khi bán',
        'Giá cả linh hoạt theo sự tự nguyện của người tiêu dùng',
      ],
      answer: 1,
    },
    {
      q: 'Bản chất lợi nhuận độc quyền cao hình thành là do đâu?',
      options: [
        'Do năng suất lao động của toàn xã hội tăng lên đồng đều',
        'Do địa vị độc quyền về kinh tế và công nghệ đem lại',
        'Do lòng hảo tâm của người tiêu dùng đóng góp',
        'Do nhà nước cấp phát trợ cấp kinh tế',
      ],
      answer: 1,
    },
    {
      q: 'Trong giai đoạn phát triển của chủ nghĩa tư bản độc quyền, quy luật giá trị thặng dư biểu hiện thành quy luật nào?',
      options: [
        'Quy luật lợi nhuận bình quân',
        'Quy luật lợi nhuận độc quyền cao',
        'Quy luật giá cả sản xuất',
        'Quy luật tích lũy nguyên thủy',
      ],
      answer: 1,
    },
    {
      q: 'Cơ cấu kinh tế của chủ nghĩa tư bản độc quyền nhà nước là sự dung hợp của những yếu tố nào?',
      options: [
        'Cơ chế thị trường tự do và sự quản lý của chính phủ',
        'Kinh tế nhà nước và kinh tế tập thể XHCN',
        'Cơ chế thị trường, độc quyền tư nhân và sự can thiệp của nhà nước tư sản',
        'Kinh tế tư nhân và các tổ chức phi chính phủ',
      ],
      answer: 2,
    },
    {
      q: 'Sự ra đời của chủ nghĩa tư bản độc quyền nhà nước nhằm mục đích gì?',
      options: [
        'Xóa bỏ hoàn toàn chế độ tư hữu tư bản chủ nghĩa',
        'Phục vụ lợi ích của tổ chức độc quyền tư nhân và cứu nguy cho chủ nghĩa tư bản',
        'Phát triển nền kinh tế thị trường định hướng xã hội hóa toàn dân',
        'Giúp đỡ các nước nghèo phát triển kinh tế',
      ],
      answer: 1,
    },
    {
      q: 'Kết quả cạnh tranh giữa các tổ chức độc quyền lớn trong cùng một ngành thường dẫn đến điều gì?',
      options: [
        'Các bên đều bị tiêu diệt hoàn toàn và thị trường biến mất',
        'Sự thỏa hiệp với nhau hoặc một bên bị phá sản/thôn tính',
        'Sự xuất hiện trở lại của thời kỳ tự do cạnh tranh hoàn hảo',
        'Sự can thiệp tước đoạt toàn bộ tài sản từ phía người lao động',
      ],
      answer: 1,
    },
    {
      q: 'Các tổ chức độc quyền của các quốc gia cạnh tranh với nhau trên thị trường quốc tế gay gắt sẽ dẫn đến xu hướng?',
      options: [
        'Cắt đứt hoàn toàn quan hệ thương mại quốc tế',
        'Thỏa hiệp với nhau để hình thành các tổ chức độc quyền quốc tế',
        'Nhờ Liên Hợp Quốc đứng ra phân chia lại thị trường nội địa',
        'Chuyển sang mô hình kinh tế tự cấp tự túc',
      ],
      answer: 1,
    },
    {
      q: 'Hình thức độc quyền dưới dạng Cartel được phổ biến rộng rãi ở Châu Âu vào thời gian nào?',
      options: [
        'Đầu thế kỷ XIX',
        'Giữa thế kỷ XIX',
        'Cuối thế kỷ XIX',
        'Cuối thế kỷ XX',
      ],
      answer: 2,
    },
    {
      q: 'Chọn nhận định SAI trong các phát biểu về hình thức độc quyền sau đây?',
      options: [
        'Cartel là hình thức độc quyền thấp, các thành viên độc lập cả về sản xuất và lưu thông',
        'Syndicate là hình thức độc quyền mà các thành viên chỉ mất độc lập về lưu thông (mất độc lập về thương mại)',
        'Trust là hình thức độc quyền cao, các thành viên mất cả độc lập về sản xuất và lưu thông',
        'Consortium là hình thức độc quyền lỏng lẻo nhất, chỉ liên kết về mặt giá cả trong ngắn hạn',
      ],
      answer: 3,
    },
  ],

  hard: [
    {
      q: 'Xu hướng hiện nay của các tổ chức độc quyền lớn trên thế giới đó là?',
      options: [
        'Thu hẹp quy mô và quay về thị trường nội địa để tránh rủi ro',
        'Trở thành các công ty độc quyền xuyên quốc gia (TNCs/MNCs) và tăng cường liên minh với nhà nước',
        'Giải thể để nhường chỗ cho các hộ sản xuất gia đình',
        'Quốc hữu hóa toàn bộ tài sản chuyển giao cho công nhân quản lý',
      ],
      answer: 1,
    },
    {
      q: 'Mục đích chủ yếu của các tập đoàn độc quyền dạng đa ngành (Conglomerate) ngày nay là thu lợi nhuận từ đâu?',
      options: [
        'Duy nhất từ kinh doanh nông nghiệp công nghệ cao',
        'Từ việc đầu cơ tài chính, chứng khoán và kinh doanh đa ngành nhằm giảm rủi ro cạnh tranh',
        'Từ các khoản viện trợ không hoàn lại của các tổ chức quốc tế',
        'Từ việc độc quyền mua bán một loại nông sản duy nhất',
      ],
      answer: 1,
    },
    {
      q: 'Trong chủ nghĩa tư bản ngày nay, các trùm tài chính thống trị nền kinh tế chủ yếu thông qua hình thức tinh vi nào?',
      options: [
        'Sử dụng vũ lực quân sự ép buộc các doanh nghiệp nhỏ',
        'Chế độ tham dự (sở hữu cổ phần khống chế) kết hợp với các thủ thuật tài chính, chế độ ủy nhiệm',
        'Trực tiếp đứng tên quản lý tất cả các công ty con trên toàn cầu',
        'Dựa hoàn toàn vào mệnh lệnh hành chính của cơ quan tư pháp',
      ],
      answer: 1,
    },
    {
      q: 'Sự kết hợp về nhân sự giữa các tổ chức độc quyền và bộ máy nhà nước tư sản thể hiện ở chỗ?',
      options: [
        'Các tài phiệt không bao giờ tham gia vào các hoạt động chính trị',
        'Sự luân chuyển, đứng tên hoặc làm cố vấn lẫn nhau giữa các đại biểu tập đoàn tư bản và các quan chức chính phủ',
        'Nhà nước cấm các chủ doanh nghiệp lớn tham gia bầu cử',
        'Các tổ chức độc quyền cử công nhân đại diện tham gia vào nội các',
      ],
      answer: 1,
    },
    {
      q: 'Trong cơ cấu của độc quyền nhà nước trong chủ nghĩa tư bản, bản thân nhà nước tư sản đã trở thành yếu tố nào?',
      options: [
        'Một tổ chức từ thiện xã hội trung lập',
        'Một tập thể tư bản khổng lồ, bộ máy vận hành phục vụ lợi ích chung của độc quyền',
        'Cơ quan xóa bỏ hoàn toàn áp bức giai cấp',
        'Công cụ riêng của giai cấp công nhân',
      ],
      answer: 1,
    },
    {
      q: 'Trong cơ chế của độc quyền nhà nước trong chủ nghĩa tư bản, mối quan hệ giữa bộ máy nhà nước và tổ chức độc quyền tư nhân là?',
      options: [
        'Nhà nước hoàn toàn bị động và bị các tổ chức độc quyền điều khiển một chiều',
        'Sự kết hợp chặt chẽ, nhà nước vừa phục vụ độc quyền tư nhân vừa điều tiết nền kinh tế vì lợi ích sinh tồn của hệ thống TBCN',
        'Nhà nước luôn đối đầu và tìm cách tiêu diệt các tổ chức độc quyền',
        'Hai yếu tố hoạt động hoàn toàn độc lập, không có bất kỳ mối liên hệ nào',
      ],
      answer: 1,
    },
    {
      q: 'Ngày nay, sự can thiệp và điều tiết của nhà nước tư sản đối với kinh tế thể hiện toàn diện ở các khâu nào?',
      options: [
        'Chỉ can thiệp vào khâu tiêu dùng cuối cùng',
        'Chỉ can thiệp vào hoạt động nhập khẩu hàng hóa',
        'Tất cả các khâu của quá trình tái sản xuất: sản xuất - phân phối - trao đổi - tiêu dùng',
        'Chỉ điều tiết thị trường tài chính, không can thiệp vào sản xuất',
      ],
      answer: 2,
    },
    {
      q: 'Mục đích tối cao của việc "xuất khẩu tư bản nhà nước" từ các nước tư bản phát triển là gì?',
      options: [
        'Thuần túy là giúp đỡ nhân đạo không vụ lợi cho các nước nghèo',
        'Đạt các mục tiêu chiến lược về kinh tế, chính trị, địa chính trị và quân sự của nhà nước tư sản',
        'Xóa bỏ ranh giới quốc gia để thành lập thế giới đại đồng',
        'Tìm kiếm nguồn lao động có trình độ cao đưa về chính quốc',
      ],
      answer: 1,
    },
    {
      q: 'Trong giai đoạn chủ nghĩa tư bản độc quyền, nhận định nào sau đây phản ánh đúng về hoạt động của quy luật giá trị?',
      options: [
        'Quy luật giá trị bị thủ tiêu hoàn toàn và không còn tác dụng',
        'Quy luật giá trị vẫn hoạt động nhưng thay đổi hình thức biểu hiện thành quy luật giá cả độc quyền',
        'Quy luật giá trị hoạt động một cách tự do hoàn hảo như thời kỳ đầu',
        'Nhà nước tư sản đã thay thế quy luật giá trị bằng kế hoạch hóa tập trung',
      ],
      answer: 1,
    },
  ],
}
