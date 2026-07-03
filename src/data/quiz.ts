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
    {
      q: 'Biểu hiện mới của sự phân chia thị trường giữa các liên minh độc quyền đó là',
      options: [
        'Hình thành các tổ chức đa quốc gia',
        'Hình thành các tổ chức độc quyền trong nhà nước tư bản',
        'Hình thành xu hướng khu vực hóa',
        'Hình thành xu hướng toàn cầu hóa'
      ],
      answer: 2
    },
    {
      q: 'Nghiên cứu về cách mạng công nghiệp lần thứ nhất, C. Mác đã khái quát tính quy luật của cách mạng công nghiệp qua mấy giai đoạn phát triển?',
      options: [
        'Một giai đoạn',
        'Hai giai đoạn',
        'Ba giai đoạn',
        'Bốn giai đoạn'
      ],
      answer: 2
    },
    {
      q: 'Khi nghiên cứu về cách mạng công nghiệp lần thứ nhất, C. Mác đã khái quát tính quy luật của các mạng công nghiệp qua các giai đoạn phát triển đó là:',
      options: [
        'Hiệp tác đơn giản, lao động thủ công, lao động phức tạp',
        'Hiệp tác đơn giản, công trường thủ công, công nghiệp hóa',
        'Hiệp tác đơn giản, sản xuất thủ công, sản xuất hiện đại',
        'Hiệp tác đơn giản, công trường thủ công, đại công nghiệp'
      ],
      answer: 3
    },
    {
      q: 'Chọn phương án sai vai trò của cách mạng công nghiệp đối với sự phát triển đó là',
      options: [
        'Thúc đẩy sự phát triển của lực lượng sản xuất',
        'Thúc đẩy các quan hệ sản xuất mới ra đời',
        'Thúc đẩy hoàn thiện quan hệ sản xuất',
        'Thúc đẩy đổi mới phương thức quản trị phát triển'
      ],
      answer: 1
    },
    {
      q: 'Đâu không phải đặc trưng của chủ nghĩa tư bản?',
      options: [
        'Quyền sở hữu tư liệu sản xuất thuộc về nhà nước',
        'Tích lũy tư bản',
        'Trao đổi tự nguyện',
        'Một hệ thống giá cả và thị trường cạnh tranh'
      ],
      answer: 0
    },
    {
      q: 'Khi nghiên cứu tái sản xuất tư bản xã hội thì K. Marx chia nền kinh tế ra làm hai khu vực là',
      options: [
        'KVI sản xuất hàng công nghiệp; KVII: sản xuất tư liệu tiêu dùng',
        'KVI: sản xuất tư liệu sản xuất; KVII: sản xuất hàng nông nghiệp',
        'KVI: sản xuất tư liệu sản xuất; KVII: sản xuất tư liệu tiêu dùng',
        'KVI: sản xuất máy móc; KVII: sản xuất tư liệu tiêu dùng'
      ],
      answer: 2
    },
    {
      q: 'Nội dung công cuộc đại phân công lao động xã hội lần thứ nhất là',
      options: [
        'Đại công nghiệp tách khỏi nông nghiệp',
        'Trồng trọt tách khỏi chăn nuôi',
        'Chăn nuôi tách khỏi trồng trọt',
        'Thủ công nghiệp tách khỏi nông nghiệp'
      ],
      answer: 2
    },
    {
      q: 'Nội dung công cuộc đại phân công lao động xã hội lần thứ hai là:',
      options: [
        'Đại công nghiệp tách khỏi nông nghiệp.',
        'Trồng trọt tách khỏi chăn nuôi.',
        'Ngành thương nghiệp ra đời',
        'Thủ công nghiệp tách khỏi nông nghiệp.'
      ],
      answer: 3
    },
    {
      q: 'Nội dung công cuộc đại phân công lao động xã hội lần thứ ba là:',
      options: [
        'Trồng trọt tách khỏi chăn nuôi.',
        'Ngành thương nghiệp ra đời',
        'Công nghiệp tách khỏi nông nghiệp',
        'Thủ công nghiệp tách khỏi nông nghiệp'
      ],
      answer: 1
    },
    {
      q: 'Kinh tế thị trường đã hình thành trong xã hội nào?',
      options: [
        'Phong kiến',
        'Chiếm hữu nô lệ',
        'Tư bản chủ nghĩa',
        'Xã hội chủ nghĩa'
      ],
      answer: 0
    },
    {
      q: 'Cách mạng công nghiệp lần thứ hai diễn ra trong giai đoạn nào?',
      options: [
        'Từ nửa cuối thế kỷ XIX đến đầu thế kỷ XX',
        'Từ nửa đầu thế kỷ XIX đến cuối thế kỷ XIX',
        'Từ nửa đầu thế kỷ XX đến nửa cuối thế kỷ XX',
        'Từ nửa cuối thế kỷ XIX đến nửa cuối thế kỷ XX'
      ],
      answer: 0
    },
    {
      q: 'Cách mạng công nghiệp lần thứ hai diễn ra trong thời gian nào?',
      options: [
        'Từ giữa thế kỷ XV đến giữa thế kỷ XIX',
        'Từ giữa thế kỷ XVI đến giữa thế kỷ XVII',
        'Từ giữa thế kỷ XVIII đến giữa thế kỷ XIX',
        'Từ giữa thế kỷ XIX đến giữa thế kỷ XX'
      ],
      answer: 3
    },
    {
      q: 'Việt Nam gia nhập tổ chức ASEAN trong khu vực khi nào?',
      options: ['1993', '1995', '1996', '1997'],
      answer: 1
    },
    {
      q: 'Để thực hiện hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam cần hoàn thành mấy nhiệm vụ chủ yếu?',
      options: ['Ba nhiệm vụ', 'Năm nhiệm vụ', 'Sáu nhiệm vụ', 'Chín nhiệm vụ'],
      answer: 2
    },
    {
      q: 'Quá trình công nghiệp hóa của các nước tư bản cổ điển diễn ra trong thời gian khoảng bao nhiêu năm?',
      options: ['Từ 50 - 70 năm', 'Từ 50 - 80 năm', 'Từ 60 - 80 năm', 'Từ 60 - 90 năm'],
      answer: 2
    },
    {
      q: 'Kinh tế chính trị Mác - Lênin có những chức nào?',
      options: [
        'Chức năng nhận thức, chức năng thực tiễn, chức năng tư tưởng, chức năng khoa học',
        'Chức năng nhận thức, chức năng thực tiễn, chức năng khoa học, chức năng phương pháp luận',
        'Chức năng thực tiễn, chức năng tư tưởng, chức năng dự báo, chức năng phương pháp luận',
        'Chức năng nhận thức, chức năng thực tiễn, chức năng tư tưởng, chức năng phương pháp luận'
      ],
      answer: 3
    },
    {
      q: 'Điều kiện để ra đời và tồn tại của sản xuất hàng hóa là',
      options: [
        'Phân công lao động xã hội và sự tách biệt về kinh tế giữa các chủ thể sản xuất',
        'Phân công lao động trong các gia đình xuất hiện',
        'Chế độ tư hữu về tư liệu sản xuất',
        'Nhu cầu trao đổi trong xã hội tăng lên'
      ],
      answer: 0
    },
    {
      q: 'Con đường công nghiệp hóa của Liên Xô thường ưu tiên lĩnh vực nào?',
      options: ['Công nghiệp nặng', 'Công nghiệp nhẹ', 'Công nghiệp khai khoáng', 'Công nghiệp chế tạo'],
      answer: 0
    },
    {
      q: 'Hệ thống lý luận kinh tế chính trị đầu tiên nghiên cứu về sản xuất tư bản chủ nghĩa là:',
      options: ['Chủ nghĩa trọng thương', 'Chủ nghĩa trọng nông', 'Kinh tế chính trị cổ điển', 'Kinh tế chính trị cổ điển Anh'],
      answer: 0
    },
    {
      q: 'V - Tư bản khả biến là:',
      options: [
        'Bộ phận trực tiếp để tạo ra giá trị sử dụng',
        'Bộ phận trực tiếp để tạo ra giá trị thặng dư',
        'Bộ phận trực tiếp để tạo ra sản phẩm thặng dư',
        'Bộ phận gián tiếp để tạo ra giá trị thặng dư'
      ],
      answer: 1
    },
    {
      q: 'Có mấy nguyên nhân chính dẫn đến sự hình thành độc quyền nhà nước trong chủ nghĩa tư bản?',
      options: ['Ba nguyên nhân', 'Bốn nguyên nhân', 'Năm nguyên nhân', 'Sáu nguyên nhân'],
      answer: 1
    },
    {
      q: 'Tiền công thực tế là',
      options: [
        'Tiền công được biểu hiện bằng số lượng hàng hóa tiêu dùng và dịch vụ mà công nhân mua được bằng tiền công danh nghĩa của mình',
        'Tiền công được biểu hiện bằng số lượng hàng hóa tiêu dùng và dịch vụ mà công nhân mua được bằng tiền công thực tế của mình',
        'Tiền công được biểu hiện bằng số tư liệu sản xuất và tiêu dùng và dịch vụ mà công nhân mua được bằng tiền công thực tế của mình',
        'Tiền công tính theo thời gian lao động thực tế của công nhân'
      ],
      answer: 0
    },
    {
      q: 'Nội dung về kinh tế chính trị của C. Mác và Ph. Ăngghen được trình bày nhiều nhất trong tác phẩm nào?',
      options: ['Tư Bản', 'Hệ tư tưởng Đức', 'Tuyên ngôn của Đảng Cộng sản', 'Biện chứng của tự nhiên'],
      answer: 0
    },
    {
      q: 'Sản xuất hàng hóa ra đời dựa trên bao nhiêu điều kiện?',
      options: ['Một điều kiện', 'Hai điều kiện', 'Ba điều kiện', 'Bốn điều kiện'],
      answer: 1
    },
    {
      q: 'Cách mạng công nghiệp lần thứ tư sẽ làm mất đi lợi thế của các nước đang phát triển về',
      options: ['Tài nguyên thiên nhiên, công nhân giá rẻ', 'Khoáng sản, sức lao động', 'Khoa học công nghệ, nhân công chất lượng cao', 'Vị trí địa lý và tài chính nội địa'],
      answer: 0
    },
    {
      q: 'Đại hội nào đã xác định kinh tế thị trường định hướng xã hội chủ nghĩa là "một kiểu tổ chức kinh tế vừa tuân theo quy luật của kinh tế thị trường vừa dựa trên cơ sở và chịu sự dẫn dắt chi phối bởi các nguyên tắc và bản chất của chủ nghĩa xã hội?',
      options: ['Đại hội Đảng toàn quốc lần thứ VI', 'Đại hội Đảng toàn quốc lần thứ VII', 'Đại hội Đảng toàn quốc lần thứ VIII', 'Đại hội Đảng toàn quốc lần thứ IX'],
      answer: 3
    },
    {
      q: 'Cách mạng công nghiệp lần thứ nhất diễn ra trong thời gian nào?',
      options: [
        'Từ giữa thế kỷ XV đến giữa thế kỷ XIX',
        'Từ giữa thế kỷ XVI đến giữa thế kỷ XVII',
        'Từ giữa thế kỷ XVIII đến giữa thế kỷ XIX',
        'Từ giữa thế kỷ XIX đến giữa thế kỷ XX'
      ],
      answer: 2
    },
    {
      q: 'Sức lao động trở thành hàng hoá một cách phổ biến từ khi nào?',
      options: ['Từ khi có chủ nghĩa tư bản', 'Từ khi có sản xuất hàng hoá', 'Từ khi có kinh tế thị trường', 'Từ khi lao động ra đời'],
      answer: 0
    },
    {
      q: 'Kinh tế thị trường đã có mầm mống từ trong xã hội nào?',
      options: ['Phong kiến', 'Chiếm hữu nô lệ', 'Tư bản chủ nghĩa', 'Xã hội chủ nghĩa'],
      answer: 1
    },
    {
      q: 'Điển vào chỗ trống: Theo Karl Marx, kinh tế chính trị học tư sản cổ điển Anh bắt đầu từ... và kết thúc ở...',
      options: [
        'William Petty... David Ricardo',
        'William Petty... Adam Smith',
        'Adam Smith... David Ricardo',
        'Adam Smith... Thomas Malthus'
      ],
      answer: 0
    },
    {
      q: 'Tư tưởng kinh tế đầu tiên của giai cấp tư sản trong giai đoạn phương thức sản xuất phong kiến tan rã và chủ nghĩa tư bản ra đời đó là',
      options: ['Chủ nghĩa trọng thương', 'Chủ nghĩa trọng nông', 'Kinh tế chính trị cổ điển Anh', 'Kinh tế chính trị của Karl Marx'],
      answer: 0
    },
    {
      q: 'Tính hai mặt của lao động sản xuất hàng hóa là',
      options: ['Lao động tư nhân, lao động xã hội', 'Lao động giản đơn, lao động phức tạp', 'Lao động cụ thể, lao động trừu tượng', 'Lao động trí óc, lao động chân tay'],
      answer: 2
    },
    {
      q: 'Kinh tế chính trị cổ điển Anh được hình thành và phát triển trong thời kỳ nào?',
      options: [
        'Từ cổ đại đến thế kỷ XVIII',
        'Từ nửa cuối thế kỷ XVII đến nửa đầu thế kỷ XVIII',
        'Từ cuối thế kỷ XVIII đến nửa đầu thế kỷ XIX',
        'Từ nửa đầu thế kỷ XIX'
      ],
      answer: 2
    },
    {
      q: 'Độc quyền nhà nước xuất hiện trong chủ nghĩa tư bản là sự liên minh giữa nhà nước tư bản với',
      options: ['Các tổ chức nhà nước', 'Các tổ chức độc quyền', 'Các tổ chức kinh tế tư nhân', 'Giai cấp công nhân hiện đại'],
      answer: 1
    },
    {
      q: 'Lý luận kinh tế chính trị của C. Mác và Ph. Ăngghen được cô đọng và tập trung trong tác phẩm nào?',
      options: ['Bộ "Tư bản"', 'Tuyên ngôn của Đảng Cộng sản', 'Phê phán cương lĩnh Gôta', 'Chống Đuy-rinh'],
      answer: 0
    },
    {
      q: 'Việt Nam trở thành thành viên chính thức của tổ chức thương mại kinh tế thế giới WTO khi nào?',
      options: ['Năm 1995', 'Năm 2006', 'Năm 2007', 'Năm 2008'],
      answer: 2
    },
    {
      q: 'Phương pháp tạo ra giá trị thặng dư tuyệt đối là gì?',
      options: [
        'Kéo dài ngày lao động vượt quá thời gian lao động tất yếu trong điều kiện năng suất lao động không đổi',
        'Rút ngắn thời gian lao động tất yếu dựa trên tăng năng suất lao động xã hội',
        'Tăng cường độ lao động của công nhân mà không kéo dài thời gian làm việc',
        'Cải tiến kỹ thuật công nghệ sản xuất hiện đại tại xí nghiệp'
      ],
      answer: 0
    },
    {
      q: 'Bóc lột giá trị thặng dư tương đối là hình thức.',
      options: [
        'Rút ngắn thời gian lao động tất yếu bằng cách tăng năng suất lao động xã hội để kéo dài tương ứng thời gian lao động thặng dư',
        'Kéo dài tuyệt đối ngày lao động của công nhân trong khi thời gian lao động tất yếu giữ nguyên',
        'Tăng cường mức độ khẩn trương của lao động tăng lượng cơ bắp tiêu hao',
        'Cắt giảm trực tiếp tiền công của người lao động dưới mức giá trị sức lao động'
      ],
      answer: 0
    },
    {
      q: 'Mô hình công nghiệp hóa của Nhật Bản và các nước công nghiệp mới (NICs) diễn ra trong khoảng bao nhiêu năm?',
      options: ['Từ 20 - 30 năm', 'Từ 40 - 50 năm', 'Từ 60 - 80 năm', 'Hơn 100 năm'],
      answer: 0
    },
    {
      q: 'Đảng và Nhà nước quyết định xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa ở nước ta từ Đại hội nào?',
      options: ['Đại hội VI', 'Đại hội VII', 'Đại hội VIII', 'Đại hội IX'],
      answer: 3
    },
    {
      q: 'Thuật ngữ "kinh tế chính trị" được sử dụng lần đầu tiên vào năm nào?',
      options: ['Năm 1615', 'Năm 1776', 'Năm 1848', 'Năm 1867'],
      answer: 0
    },
    {
      q: 'Người phát minh ra con thoi - một cải tiến của khung dệt và là một đóng góp quan trọng cho cách mạng công nghiệp lần thứ nhất là',
      options: ['James Watt', 'John Kay', 'Edmund Cartwright', 'James Hargreaves'],
      answer: 1
    },
    {
      q: 'Trong quá trình hội nhập kinh tế quốc tế, Việt Nam đã gia nhập những tổ chức nào sau đây ?',
      options: ['ASEAN, APEC, WTO', 'EU, NATO, ASEAN', 'APEC, OPEC, WTO', 'UN, NATO, EU'],
      answer: 0
    },
    {
      q: 'Công nghiệp hoá ở Anh (cuộc cách mạng công nghiệp lần thứ nhất) bắt nguồn từ ngành nào?',
      options: ['Công nghiệp nhẹ (ngành dệt)', 'Công nghiệp nặng (luyện kim)', 'Nông nghiệp trồng lúa', 'Giao thông vận tải đường sắt'],
      answer: 0
    },
    {
      q: 'Mức độ bóc lột của nhà tư bản được tính bằng',
      options: ['Tỷ suất giá trị thặng dư (m\')', 'Khối lượng giá trị thặng dư (M)', 'Tỷ suất lợi nhuận (p\')', 'Tỷ suất tích lũy tư bản'],
      answer: 0
    },
    {
      q: '"Khoa học và công nghệ sẽ có bước tiến nhảy vọt. Kinh tế tri thức có vai trò ngày càng nổi bật trong quá trình phát triển lực lượng sản xuất" được nhận định trong đại hội mấy của Đảng ?',
      options: ['Đại hội VIII', 'Đại hội IX', 'Đại hội X', 'Đại hội XI'],
      answer: 1
    },
    {
      q: 'Đảng ta khẳng định: "Nền kinh tế thị trường định hướng xã hội chủ nghĩa ở nước ta là nền kinh tế nhiều thành phần, vận hành theo cơ chế thị trường, có sự quản lý của Nhà nước, dưới sự lãnh đạo của Đảng Cộng sản" từ Đại hội nào?',
      options: ['Đại hội VIII', 'Đại hội IX', 'Đại hội X', 'Đại hội XI'],
      answer: 2
    },
    {
      q: 'Đến nay thế giới trải qua bao nhiều cuộc cách mạng công nghiệp?',
      options: ['2 cuộc cách mạng', '3 cuộc cách mạng', '4 cuộc cách mạng', '5 cuộc cách mạng'],
      answer: 2
    },
    {
      q: 'Cách mạng công nghiệp lần thứ 3 còn được gọi là:',
      options: ['Cách mạng số / khoa học và công nghệ', 'Cách mạng cơ giới hóa', 'Cách mạng điện khí hóa', 'Cách mạng sinh học tự động'],
      answer: 0
    },
    {
      q: 'Đâu KHÔNG phải là chức năng chính của kinh tế chính trị Mác - Lênin?',
      options: ['Chức năng nhận thức', 'Chức năng thực tiễn', 'Chức năng tư tưởng', 'Chức năng giải trí văn hóa'],
      answer: 3
    },
    {
      q: 'Theo C. Mác, hàng hoá là sản phẩm lao động được sản xuất ra nhằm mục đích gì?',
      options: ['Để tiêu dùng cho chính người sản xuất ra nó', 'Để trao đổi, mua bán thông qua thị trường', 'Để tích trữ làm giàu cá nhân', 'Để phục vụ mục đích từ thiện xã hội'],
      answer: 1
    },
    {
      q: 'Theo C.Mác, khối lượng giá trị thặng dư là gì?',
      options: [
        'Tỷ lệ phần trăm bóc lột của tư bản đối với công nhân',
        'Lượng giá trị thặng dư tính bằng số tuyệt đối mà nhà tư bản thu được',
        'Phần tiền công danh nghĩa trả cho sức lao động',
        'Toàn bộ chi phí sản xuất tư bản bỏ ra ban đầu'
      ],
      answer: 1
    },
    {
      q: 'Đại hội nào của Đảng Cộng sản Việt Nam đề cập đến sự cần thiết đổi mới cơ chế quản lý kinh tế',
      options: ['Đại hội IV', 'Đại hội V', 'Đại hội VI', 'Đại hội VII'],
      answer: 2
    },
    {
      q: 'Cách mạng công nghiệp lần thứ tư được đề cập lần đầu tiên tại ở đâu và năm nào?',
      options: ['Đức (năm 2011)', 'Mỹ (năm 2016)', 'Anh (năm 2010)', 'Nhật Bản (năm 2015)'],
      answer: 0
    },
    {
      q: 'Công nghiệp hóa ở nước Anh bắt nguồn từ ngành nào?',
      options: ['Ngành dệt (công nghiệp nhẹ)', 'Ngành luyện kim', 'Ngành chế tạo máy', 'Ngành khai thác mỏ'],
      answer: 0
    },
    {
      q: 'Cách mạng công nghiệp lần thứ nhất khởi phát ở quốc gia nào?',
      options: ['Nước Anh', 'Nước Pháp', 'Nước Đức', 'Nước Mỹ'],
      answer: 0
    },
    {
      q: 'Cách mạng công nghiệp lần thứ hai khởi phát ở quốc gia nào?',
      options: ['Nước Anh', 'Mỹ và Đức', 'Nước Pháp', 'Nhật Bản'],
      answer: 1
    },
    {
      q: 'Mô hình công nghiệp hóa kiểu Liên Xô được bắt đầu trong thời gian nào?',
      options: ['Cuối những năm 1920', 'Đầu thế kỷ XX', 'Sau Chiến tranh thế giới thứ hai', 'Những năm 1950'],
      answer: 0
    },
    {
      q: 'Cấu tạo hữu cơ của tư bản được kí hiệu là',
      options: ['c/v', 'v/c', 'm/v', 'p/c'],
      answer: 0
    },
    {
      q: 'Tốc độ chu chuyển tư bản được tính bằng công thức:',
      options: ['n = CH / ch', 'n = ch / CH', 'n = c + v + m', 'n = m / v'],
      answer: 0
    },
    {
      q: 'Tiền tệ có mấy chức năng?',
      options: ['3 chức năng', '4 chức năng', '5 chức năng', '6 chức năng'],
      answer: 2
    },
    {
      q: 'Trong tuần hoàn tư bản, giai đoạn đầu tiên - giai đoạn lưu thông tư bản tồn tại dưới hình thái gì?',
      options: ['Tư bản tiền tệ', 'Tư bản sản xuất', 'Tư bản hàng hóa', 'Tư bản cho vay'],
      answer: 0
    },
    {
      q: 'Trong tuần hoàn tư bản, giai đoạn thứ hai - giai đoạn lưu thông tư bản tồn tại dưới hình thái gì?',
      options: ['Tư bản tiền tệ', 'Tư bản sản xuất', 'Tư bản hàng hóa', 'Tư bản tín dụng'],
      answer: 1
    },
    {
      q: 'Trong tuần hoàn tư bản, giai đoạn thứ ba - giai đoạn lưu thông tư bản tồn tại dưới hình thái gì?',
      options: ['Tư bản tiền tệ', 'Tư bản sản xuất', 'Tư bản hàng hóa', 'Tư bản tài chính'],
      answer: 2
    },
    {
      q: 'Cách mạng công nghiệp lần thứ ba diễn ra trong giai đoạn nào?',
      options: [
        'Từ những năm 40 của thế kỷ XX đến cuối thế kỷ XX',
        'Từ đầu thế kỷ XX đến giữa thế kỷ XX',
        'Từ thế kỷ XVIII đến XIX',
        'Từ thế kỷ XXI đến nay'
      ],
      answer: 0
    },
    {
      q: 'Cách mạng công nghiệp lần thứ ba diễn ra trong thời gian nào?',
      options: ['Giữa thế kỷ XVIII đến XIX', 'Giữa thế kỷ XIX đến XX', 'Giữa thế kỷ XX đến cuối thế kỷ XX', 'Đầu thế kỷ XXI'],
      answer: 2
    },
    {
      q: 'Công thức chung của tư bản là:',
      options: ['H - T - H', 'T - H - T\'', 'T - H', 'H - T'],
      answer: 1
    }
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
    {
      q: 'Địa tô chênh lệch II thu được trên loại đất nào?',
      options: ['Ruộng đất đã thâm canh', 'Ruộng đất có độ màu mỡ trung bình', 'Ruộng đất có độ màu mỡ tốt', 'Ruộng đất bỏ hoang lâu năm'],
      answer: 0
    },
    {
      q: 'Chênh lệch Địa tô chính I thu được trên loại đất nào?',
      options: ['Ruộng đất có độ màu mỡ trung bình', 'Ruộng đất tốt', 'Đất ruộng ở vị trí thuận lợi', 'Cả ba đáp án trên'],
      answer: 3
    },
    {
      q: 'Các tổ chức độc quyền sử dụng giá cả độc quyền để',
      options: ['Củng cố vai trò tổ chức độc quyền', 'Chiếm đoạt giá trị thặng dư của người khác', 'Gây thiệt hại cho các đối thủ cạnh tranh', 'Bảo vệ quyền lợi người tiêu dùng'],
      answer: 1
    },
    {
      q: 'Cơ chế kinh tế của độc quyền nhà nước trong chủ nghĩa tư bản gồm:',
      options: [
        'Cơ chế thị trường, độc quyền tư nhân và sự can thiệp của nhà nước',
        'Cơ chế thị trường, các nhà tài phiệt và sự điều tiết của nhà nước',
        'Cơ chế thị trường và độc quyền tư nhân',
        'Cơ chế kinh tế kế hoạch tập trung bao cấp mệnh lệnh'
      ],
      answer: 0
    },
    {
      q: 'Trong lịch sử phát triển nền sản xuất xã hội, tiền đề nào là quan trọng cho sự ra đời và phát triển của nền kinh tế thị trường?',
      options: ['Sản xuất', 'Trao đổi hàng hóa', 'Thị trường', 'Sản xuất và trao đổi hàng hóa'],
      answer: 3
    },
    {
      q: 'Vì sao trong chủ nghĩa tư bản độc quyền cạnh tranh không bị thủ tiêu?',
      options: [
        'Vì cạnh tranh là quy luật khách quan của kinh tế hàng hoá',
        'Vì tổ chức độc quyền cạnh tranh với các công ty ngoài độc quyền',
        'Vì các xí nghiệp trong nội bộ tổ chức độc quyền cạnh tranh với nhau',
        'Tất cả các phương án trên đều đúng'
      ],
      answer: 3
    },
    {
      q: 'Công nghiệp hoá, hiện đại hoá đất nước phải bảo đảm yếu tố nào?',
      options: [
        'Xây dựng nền kinh tế khép kín và hướng nội hoàn toàn',
        'Xây dựng nền kinh tế độc lập tự chủ',
        'Xây dựng nền kinh tế phải dựa vào sự giúp đỡ và lệ thuộc hoàn toàn các nước tư bản',
        'Xây dựng nền kinh tế mở nhưng chỉ giao lưu hợp tác với các nước xã hội chủ nghĩa'
      ],
      answer: 1
    },
    {
      q: 'Độc quyền nhà nước trong chủ nghĩa tư bản, sở hữu nhà nước thực hiện chức năng nào?',
      options: [
        'Mở rộng sản xuất tư bản chủ nghĩa',
        'Tạo điều kiện cho việc di chuyển tư bản của các tổ chức độc quyền vào các ngành sản xuất kinh doanh khác nhau',
        'Làm chỗ dựa cho sự điều tiết kinh tế nhà nước',
        'Tất cả phương án trên đều đúng'
      ],
      answer: 3
    },
    {
      q: 'Mệnh đề nào sau đây là ý không đúng về lao động phức tạp?',
      options: [
        'Lao động phức tạp là lao động trí tuệ của người lao động có trình độ cao',
        'Lao động phức tạp là lao động trải qua đào tạo, huấn luyện chuyên môn',
        'Trong cùng một thời gian lao động, lao động phức tạp tạo ra nhiều giá trị hơn lao động giản đơn.',
        'Lao động phức tạp là lao động thủ công đơn giản ai cũng làm được ngay'
      ],
      answer: 3
    },
    {
      q: 'Ai là người đề xuất ra ba loại thương nghiệp (trao đổi tự nhiên, trao đổi tiền tệ, trao đổi thông qua mục đích làm giàu) và hai loại kinh doanh (kinh tế, sản xuất của cải)?',
      options: ['Aristoteles', 'Platon', 'Xenophon', 'Karl Marx'],
      answer: 0
    },
    {
      q: 'Kinh tế thị trường được hiểu là như thế nào? (Về vị trí lịch sử, kinh tế thị trường có đặc điểm gì?)',
      options: [
        'Do chủ nghĩa tư bản sinh ra và thuộc về bản chất riêng biệt của nó',
        'Có cùng bản chất với kinh tế hàng hóa nhưng phát triển ở trình độ cao hơn',
        'Tồn tại chủ quan mang tính ý chí trong thời kỳ quá độ lên chủ nghĩa xã hội',
        'Là sản phẩm độc quyền tự thân của chế độ tư hữu'
      ],
      answer: 1
    },
    {
      q: 'Sự tách biệt về mặt kinh tế giữa các chủ thể sản xuất xuất hiện dựa trên cơ sở nào?',
      options: ['Sự tách biệt về tổ chức sản xuất', 'Sự tách biệt về phân phối sản phẩm', 'Sự tách biệt về quyền sở hữu tư liệu sản xuất', 'Sự tách biệt về vai trò sản xuất'],
      answer: 2
    },
    {
      q: 'Bản chất khủng hoảng thừa trong nền kinh tế là gì?',
      options: [
        'Khủng hoảng sản xuất "thừa" so với sức mua có hạn của xã hội.',
        'Khủng hoảng sản xuất "thừa" so với nhu cầu thực tế của toàn xã hội.',
        'Khủng hoảng sản xuất "thiếu hụt" trầm trọng so với sức mua thị trường.',
        'Khủng hoảng cơ cấu kinh tế giữa nông nghiệp và dịch vụ công'
      ],
      answer: 0
    },
    {
      q: 'Biểu hiện mới của tích tụ và tập trung tư bản trong giai đoạn hiện nay là',
      options: ['Sự xuất hiện của các công ty độc quyền xuyên quốc gia', 'Sự bành trướng lãnh thổ quốc gia', 'Sự tranh giành, xung đột lợi ích về kinh tế đơn lẻ', 'Sự xung đột vũ trang mang tính chính trị'],
      answer: 0
    },
    {
      q: 'Những biểu hiện của độc quyền nhà nước trong chủ nghĩa tư bản là:',
      options: [
        'Sự kết hợp nhân sự giữa tổ chức độc quyền cùng với nhà nước; sự hình thành sở hữu nhà nước',
        'Sự kết hợp về nhân sự giữa tổ chức độc quyền và nhà nước; sự hình thành phát triển sở hữu nhà nước và sự điều tiết kinh tế của nhà nước tư sản.',
        'Sự kết hợp về nhân sự và sự điều tiết kinh tế đối ngoại độc lập của nhà nước tư sản.',
        'Sự kết hợp về nhân sự giữa tổ chức độc quyền với nhà nước; sự điều tiết phi kinh tế.'
      ],
      answer: 1
    },
    {
      q: 'Chọn ý đúng về tăng cường độ lao động. Khi cường độ lao động tăng lên thì',
      options: [
        'Số lượng hàng hoá làm ra trong một đơn vị thời gian không đổi',
        'Số lượng lao động hao phí trong thời gian đó không thay đổi',
        'Giá trị 1 đơn vị hàng hoá giảm đi một cách tương ứng',
        'Tổng số lượng hàng hóa làm ra của một người tăng lên và hao phí lao động tăng'
      ],
      answer: 3
    },
    {
      q: 'Trên giác độ kinh tế chính trị, lao động trừu tượng là phạm trù của nền kinh tế nào?',
      options: ['Là phạm trù của mọi nền kinh tế hàng hoá', 'Là phạm trù riêng biệt duy nhất của kinh tế thị trường', 'Là phạm trù chung của mọi nền kinh tế tự nhiên tự cấp', 'Là phạm trù của xã hội cộng sản nguyên thủy'],
      answer: 0
    },
    {
      q: 'Xét về bản chất, thì lợi ích kinh tế được hiểu là gì? (Xét về bản chất, lợi ích kinh tế được hiểu như thế nào?)',
      options: ['Quan hệ kinh tế xã hội', 'Quan hệ xã hội, mang tính lịch sử', 'Quan hệ kỹ thuật sản xuất', 'Quan hệ chính trị mang tính lợi ích'],
      answer: 0
    },
    {
      q: 'Yếu tố nào quyết định đến sự hình thành của cách mạng công nghiệp?',
      options: [
        'Sự phát triển vượt bậc của quan hệ sản xuất',
        'Phương thức sản xuất mới ra đời thay thế hoàn toàn cái cũ',
        'Sự phát triển nhảy vọt về trình độ của tư liệu lao động (công cụ sản xuất)',
        'Các phát minh sáng chế của các nhà khoa học trên mọi lĩnh vực đời sống'
      ],
      answer: 2
    },
    {
      q: 'Khi lạm phát phi mã xảy ra, hình thức sử dụng tiền nào có lợi nhất? (Kiểu hỏi 1)',
      options: ['Mua hàng hoá hoặc vàng cất giữ', 'Gửi tiết kiệm ngân hàng lấy lãi', 'Đầu tư vào sản xuất kinh doanh bằng nội tệ', 'Mua trái phiếu chính phủ'],
      answer: 0
    },
    {
      q: 'Sự tuần hoàn của tư bản, nếu xét nó với tư cách là một quá trình định kỳ đổi mới và thường xuyên lặp đi lặp lại được gọi là gì?',
      options: ['Chu chuyển tư bản', 'Lưu thông tự bản', 'Vận động tư bản', 'Tái sản xuất tư bản'],
      answer: 0
    },
    {
      q: 'Phương pháp nghiên cứu kinh tế chính trị Mác - Lênin phù hợp nhất đó là:',
      options: ['Trừu tượng hóa khoa học', 'Phân tích và tổng hợp hiện tượng', 'Quy nạp diễn dịch logic', 'Khảo sát, tổng kết thực tiễn xã hội'],
      answer: 0
    },
    {
      q: '"Tư bản tài chính là kết quả của sự hợp nhất giữa tư bản ngân hàng của một số ít ngân hàng độc quyền lớn nhất, với tư bản của những liên minh độc quyền các nhà công nghiệp." Câu nói trên của ai?',
      options: ['C. Mác', 'Ph. Ăngghen', 'V. I Lênin', 'Hồ Chí Minh'],
      answer: 2
    },
    {
      q: 'Tăng năng suất lao động sẽ dẫn đến hệ quả gì đối với giá trị hàng hóa?',
      options: [
        'Giá trị một đơn vị hàng hóa tăng lên',
        'Giá trị một đơn vị hàng hóa không đổi',
        'Giá trị một đơn vị hàng hóa giảm đi',
        'Giá trị tổng sản phẩm giảm đi đáng kể'
      ],
      answer: 2
    },
    {
      q: 'Hãy chọn ý đúng khi nói về quan hệ giữa giá trị và giá cả?',
      options: [
        'Giá trị là cơ sở của giá cả, quyết định giá cả, giá cả là hình thức bằng tiền của giá trị',
        'Giá cả thị trường còn chịu ảnh hưởng của cung - cầu, giá trị của đồng tiền',
        'Các phương án trả lời trên đều đúng',
        'Giá trị luôn luôn bằng giá cả thị trường trong mọi tình huống'
      ],
      answer: 2
    },
    {
      q: 'Thể chế được phân loại theo các tiêu chí nào?',
      options: [
        'Cách tiếp cận cấu trúc hệ thống, phương thức phát huy vai trò của chủ thể, cấu thành lĩnh vực cốt lõi và cấu trúc tổ chức tham gia',
        'Cách tiếp cận cấu trúc hệ thống phương thức phát huy vai trò của doanh nghiệp riêng lẻ',
        'Cách tiếp cận sự phân chia bên trong hay bên ngoài và quy mô thị trường tự do',
        'Phân loại theo ý chí chủ quan của cơ quan lập pháp hành pháp'
      ],
      answer: 0
    },
    {
      q: 'Lao động sản xuất có đặc trưng cơ bản là gì?',
      options: [
        'Hoạt động cơ bản nhất, là phẩm chất đặc biệt cá nhân',
        'Là hoạt động có mục đích, có ý thức của con người',
        'Là sự tiêu dùng sức lao động trong hiện thực cuộc sống',
        'Các phương án trả lời trên đều đúng'
      ],
      answer: 3
    },
    {
      q: 'Hoạt động nào của con người được coi là cơ bản nhất và là cơ sở của đời sống xã hội?',
      options: ['Hoạt động chính trị tập thể.', 'Hoạt động sản xuất của cải vật chất.', 'Hoạt động nghệ thuật, thể thao giải trí.', 'Hoạt động thực nghiệm khoa học công nghệ.'],
      answer: 1
    },
    {
      q: 'Cách mạng công nghiệp lần thứ hai đã tạo ra những tiến bộ vượt bậc trong lĩnh vực nào?',
      options: ['Giao thông vận tải và thông tin liên lạc', 'Kết cấu hạ tầng và viễn thông toàn cầu', 'Năng lượng điện và năng lượng hóa thạch', 'Tất cả các phương án trên đều đúng'],
      answer: 3
    },
    {
      q: 'Khi nào xuất hiện hình thái tiền tệ? (Kiểu hỏi 1)',
      options: [
        'Khi sản xuất và trao đổi hàng hóa mới bắt đầu nhen nhóm',
        'Khi vật ngang giá chung được cố định vững chắc ở các kim loại quý (vàng, bạc)',
        'Khi không còn quan hệ trao đổi trực tiếp vật đổi vật',
        'Khi nhu cầu tiêu dùng nội địa bị sụt giảm sút nghiêm trọng'
      ],
      answer: 1
    },
    {
      q: 'Hoàn thiện hệ thống luật pháp, cơ chế, chính sách cho hoạt động và phát triển lành mạnh của thị trường chứng khoán, tăng tính minh bạch chống các giao dịch phi pháp, các hành vi rửa tiền là thuộc về nhiệm vụ nào?',
      options: [
        'Thống nhất nhận thức về nền kinh tế thị trường định hướng XHCN',
        'Hoàn thiện thể chế về sở hữu và các thành phần kinh tế, loại hình doanh nghiệp',
        'Hoàn thiện thể chế đảm bảo đồng bộ các yếu tố thị trường và phát triển đồng bộ các loại thị trường',
        'Hoàn thiện thể chế gắn kết phát triển kinh tế với bảo đảm quốc phòng an ninh'
      ],
      answer: 2
    },
    {
      q: 'Những đặc điểm kinh tế cơ bản nhất của chủ nghĩa tư bản độc quyền bao gồm những gì?',
      options: [
        'Tập trung sản xuất cùng tổ chức độc quyền; tư bản tài chính; xuất khẩu tư bản; phân chia thế giới về lãnh thổ',
        'Sự phân chia thị trường thế giới giữa các tổ chức độc quyền tư nhân nhỏ lẻ khắp nơi',
        'Tập trung sản xuất; xuất khẩu tư bản; phân chia thị trường thế giới độc quyền tư nhân',
        'Tập trung sản xuất; tư bản tài chính; xuất khẩu tư bản; sự phân chia thị trường và phân chia lãnh thổ thế giới giữa các cường quốc'
      ],
      answer: 3
    },

    {
      q: 'Xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam nhằm thực hiện mục tiêu gì?',
      options: [
        'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh',
        'Dân giàu, nước mạnh, công bằng, dân chủ, văn minh',
        'Dân giàu, nước mạnh, văn minh, công bằng, dân chủ',
        'Dân giàu, nước mạnh, dân chủ, văn minh, công bằng'
      ],
      answer: 0
    },
    {
      q: 'Hội nhập kinh tế quốc tế, mở rộng kinh tế đối ngoại nhằm mục đích gì? (Đâu không phải là mục đích của hội nhập kinh tế quốc tế?)',
      options: [
        'Thu hút vốn đầu tư nước ngoài, thu hút công nghệ hiện đại tiên tiến',
        'Học hỏi kinh nghiệm quản lý kinh tế tiên tiến của các nước trên thế giới',
        'Khai thác thị trường thế giới để tiêu thụ sản phẩm quốc gia có lợi thế',
        'Tất cả các phương án trên đều đúng (Mục đích sai: Đầu tư tư bản trực tiếp ra nước ngoài để bóc lột)'
      ],
      answer: 3
    },
    {
      q: 'Hệ thống lý luận kinh tế chính trị nào bước đầu nghiên cứu về nền sản xuất tư bản chủ nghĩa?',
      options: ['Chủ nghĩa trọng thương', 'Chủ nghĩa trọng nông', 'Chủ nghĩa tư bản tự do cạnh tranh', 'Chủ nghĩa xã hội khoa học'],
      answer: 0
    },
    {
      q: 'Vì sao ta cần phải hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa?',
      options: [
        'Hệ thống thể chế kinh tế của nước ta hiện nay vẫn chưa đầy đủ, thiếu đồng bộ',
        'Hệ thống thể chế cũ tạm thời vẫn đang phát huy hiệu quả tối đa',
        'Hệ thống thể chế đã sở hữu quá nhiều yếu tố thị trường tiên tiến toàn cầu',
        'Chế độ thể chế kinh tế thị trường định hướng xã hội chủ nghĩa đã hoàn hảo hoàn toàn'
      ],
      answer: 0
    },
    {
      q: 'Nguyên nhân nào đã dẫn đến sự sụp đổ của Liên Xô và hệ thống xã hội chủ nghĩa ở Đông Âu? (Nguyên nhân nào quyết định nhất dẫn đến sự sụp đổ của Liên Xô và hệ thống XHCN ở Đông Âu?)',
      options: [
        'Duy trì quá lâu cơ chế kế hoạch hoá tập trung quan liêu bao cấp mệnh lệnh',
        'Sự tiến bộ khoa học kỹ thuật diễn ra không đồng bộ giữa các ngành',
        'Sản xuất hàng hóa tiêu dùng không đi đôi với nhu cầu thực tế của người dân',
        'Quá trình công nghiệp hoá diễn ra quá nhanh vượt tiềm lực quốc gia'
      ],
      answer: 0
    },
    {
      q: 'Quan điểm về hoàn thiện thể chế thị trường định hướng xã hội chủ nghĩa là gì?',
      options: [
        'Đảm bảo tính đồng bộ giữa các bộ phận cấu thành của thể chế kinh tế',
        'Chủ động, tích cực giải quyết các vấn đề lý luận và thực tiễn, nâng cao năng lực lãnh đạo',
        'Kế thừa có chọn lọc thành tựu nhân loại và kinh nghiệm thực tiễn đổi mới ở nước ta',
        'Tất cả các phương án trên đều đúng'
      ],
      answer: 3
    },
    {
      q: 'Lao động sản xuất có vai trò gì đối với con người?',
      options: [
        'Tạo ra của cải vật chất nuôi sống con người và duy trì xã hội tồn tại',
        'Phát triển, hoàn thiện con người cả về mặt thể lực lẫn trí lực sâu sắc',
        'Giúp con người tích luỹ kinh nghiệm, chế tạo công cụ sản xuất tinh vi hơn',
        'Các phương án trả lời trên đều đúng'
      ],
      answer: 3
    },
    {
      q: 'Giá cả ruộng đất phụ thuộc các nhân tố nào?',
      options: ['Mức địa tô của đất', 'Độ màu mỡ tư nhiên của đất', 'Vị trí địa lý của mảnh đất', 'Tất cả các nhân tố trên đều đúng'],
      answer: 3
    },
    {
      q: 'Ngoài giá trị thì giá cả của thị trường còn phụ thuộc vào yếu tố nào?',
      options: [
        'Yếu tố cạnh tranh cá biệt',
        'Yếu tố cạnh tranh và sức mua của đồng tiền đơn lẻ',
        'Yếu tố cạnh tranh, cung cầu thị trường, sức mua của đồng tiền.',
        'Yếu tố cạnh tranh, cung cầu, sức mua của đồng tiền và cấu tạo tư bản'
      ],
      answer: 2
    },
    {
      q: 'Đâu là giới hạn phát triển của chủ nghĩa tư bản?',
      options: [
        'Mục đích của nền sản xuất tư bản chủ nghĩa vẫn tập trung chủ yếu vì lợi ích của thiểu số giai cấp tư sản',
        'Thúc đẩy lực lượng sản xuất xã hội phát triển nhanh chóng vượt bậc',
        'Chuyển nền sản xuất nhỏ thủ công thành nền sản xuất lớn hiện đại',
        'Thực hiện quá trình xã hội hoá sản xuất một cách sâu sắc rộng rãi'
      ],
      answer: 0
    },
    {
      q: 'Trong nền kinh tế thị trường định hướng xã hội chủ nghĩa, thành phần kinh tế mới nào xuất hiện ở nước ta?',
      options: ['Thành phần kinh tế có vốn đầu tư nước ngoài', 'Không có thành phần kinh tế mới xuất hiện', 'Thành phần kinh tế tập thể liên hiệp', 'Thành phần kinh tế nhà nước chủ đạo'],
      answer: 0
    },
    {
      q: 'Nhận xét dưới đây về phương pháp sản xuất giá trị thặng dư tuyệt đối, nhận xét nào là không đúng?',
      options: [
        'Chủ yếu áp dụng ở giai đoạn đầu của chủ nghĩa tư bản khi kỹ thuật còn thủ công lạc hậu',
        'Giá trị sức lao động của người công nhân không thay đổi',
        'Thời gian lao động tất yếu của người công nhân bị co hẹp lại',
        'Thời gian làm việc trong một ngày của công nhân được giữ nguyên kéo dài vượt quá ngày lao động'
      ],
      answer: 2
    },
    {
      q: 'Chọn ý đúng về quan hệ cung - cầu đối với giá trị, giá cả?',
      options: [
        'Cung cầu quyết định trực tiếp bản chất giá trị hàng hóa',
        'Cung cầu điều tiết làm giá cả biến động xoay quanh giá trị hàng hóa',
        'Cung cầu không có bất kỳ ảnh hưởng nào tới giá cả thị trường',
        'Cung luôn luôn bằng cầu trong nền kinh tế tự do cạnh tranh hoàn hảo'
      ],
      answer: 1
    },
    {
      q: 'Địa tô tuyệt đối được hiểu là gì?',
      options: [
        'Địa tô mà bất kỳ nhà tư bản thuê đất nào cũng phải nộp cho địa chủ không phân biệt loại đất tốt xấu',
        'Địa tô thu được trên đất tốt và đất có vị trí thuận lợi',
        'Địa tô hình thành do thâm canh tăng năng suất',
        'Địa tô thu được từ kinh doanh nông sản độc quyền quý hiếm'
      ],
      answer: 0
    },
    {
      q: 'Cấu tạo giá trị của tư bản được hiểu là như thế nào?',
      options: [
        'Tỷ lệ phân chia khối lượng tư bản thành tư bản bất biến (c) và tư bản khả biến (v)',
        'Tỷ lệ giữa số lượng tư liệu sản xuất và số lượng sức lao động sử dụng',
        'Mối quan hệ giữa tư bản cố định và tư bản lưu động',
        'Tỷ lệ giữa lợi nhuận thu được và tổng chi phí sản xuất bỏ ra'
      ],
      answer: 0
    },
    {
      q: 'Đặc trưng của cách mạng công nghiệp lần thứ hai đó là gì?',
      options: ['Sử dụng năng lượng nước và hơi nước để cơ giới hóa', 'Sử dụng năng lượng điện và động cơ đốt trong để sản xuất hàng loạt', 'Sử dụng công nghệ thông tin và máy tính để tự động hóa', 'Sử dụng trí tuệ nhân tạo và dữ liệu lớn hệ thống vật lý không gian'],
      answer: 1
    },
    {
      q: 'Kinh tế tri thức là gì?',
      options: [
        'Nền kinh tế trong đó sự sản xuất, phân phối và sử dụng tri thức đóng vai trò quyết định nhất đối với sự phát triển',
        'Nền kinh tế chỉ tập trung vào giáo dục và đào tạo đại học học thuật',
        'Nền kinh tế không sử dụng đến sức lao động chân tay công bắp',
        'Nền kinh tế đóng kín tự cung tự cấp các sản phẩm phần mềm công nghệ'
      ],
      answer: 0
    },
    {
      q: 'Tư bản tài chính có nguồn gốc từ đâu?',
      options: [
        'Sự kết hợp, hòa hợp nhân sự giữa nhà nước và các tổ chức độc quyền lớn',
        'Sự dung hợp giữa tư bản độc quyền ngân hàng và tư bản độc quyền công nghiệp',
        'Do nhà nước cấp phát vốn tài trợ từ nguồn ngân sách quốc gia',
        'Từ hoạt động đầu cơ chứng khoán của các hộ gia đình tư nhân'
      ],
      answer: 1
    },
    {
      q: 'Ai là người đưa kinh tế chính trị trở thành môn khoa học có tính hệ thống với các phạm trù và khái niệm chuyên ngành? (Kinh tế chính trị cổ điển Anh được mở đầu bằng các quan điểm lý luận của nhà kinh tế chính trị học nào?)',
      options: ['William Petty', 'Adam Smith', 'David Ricardo', 'Karl Marx'],
      answer: 1
    },
    {
      q: 'Tiền công trong chủ nghĩa tư bản có mấy hình thức?',
      options: ['1 hình thức', '2 hình thức (tiền công tính theo thời gian và sản phẩm)', '3 hình thức', '4 hình thức'],
      answer: 1
    },
    {
      q: 'Đại Hội X của Đảng chỉ rõ mục tiêu đẩy mạnh công nghiệp hoá, hiện đại hoá cần gắn với yếu tố nào?',
      options: ['Phát triển kinh tế tri thức', 'Phát triển nông nghiệp thủ công', 'Thu hẹp thị trường đối ngoại', 'Quốc hữu hóa toàn bộ tư nhân'],
      answer: 0
    },
    {
      q: 'Xét về trình độ phát triển, kinh tế thị trường ở Việt Nam bao gồm nhiều cấp độ nào?',
      options: [
        'Từ sơ khai, mầm mống đến trình độ kinh tế thị trường hiện đại',
        'Chỉ tồn tại ở cấp độ thị trường tự cấp nội bộ xí nghiệp',
        'Đã đạt trình độ kinh tế thị trường tư bản chủ nghĩa hoàn chỉnh',
        'Cấp độ kinh tế bao cấp mệnh lệnh hành chính chuyên nghiệp'
      ],
      answer: 0
    },
    {
      q: 'Lượng giá trị của đơn vị hàng hoá thay đổi như thế nào đối với năng suất và cường độ lao động?',
      options: [
        'Tỷ lệ nghịch với năng suất lao động và không thay đổi khi cường độ lao động biến động',
        'Tỷ lệ thuận với năng suất lao động và tỷ lệ nghịch với cường độ lao động',
        'Tăng lên khi năng suất lao động tăng và giảm đi khi cường độ lao động tăng',
        'Không phụ thuộc vào cả năng suất lao động lẫn cường độ lao động xã hội'
      ],
      answer: 0
    },
    {
      q: 'Chọn câu sai khi nói về kinh tế thị trường.',
      options: [
        'Kinh tế thị trường là giai đoạn phát triển cao của kinh tế hàng hóa',
        'Kinh tế thị trường là sản phẩm riêng có, đặc trưng độc quyền của chủ nghĩa tư bản',
        'Kinh tế thị trường vận hành dựa trên sự điều tiết của các quy luật khách quan',
        'Kinh tế thị trường thừa nhận sự tồn tại đa dạng của các hình thức sở hữu'
      ],
      answer: 1
    },
    {
      q: 'Tích lũy tư bản dẫn đến hệ quả gì trong giai đoạn tự do cạnh tranh?',
      options: [
        'Tăng cấu tạo hữu cơ của tư bản, dẫn đến nạn thất nghiệp tự phát của công nhân',
        'Xóa bỏ hoàn toàn khoảng cách giàu nghèo trong xã hội tư sản',
        'Làm giảm quy mô bóc lột của nhà tư bản đối với lao động làm thuê',
        'Thủ tiêu hoàn toàn mâu thuẫn giai cấp giữa vô sản và tư sản'
      ],
      answer: 0
    },
    {
      q: 'Đối tượng nghiên cứu của kinh tế chính trị Mác - Lênin được hiểu là gì?',
      options: [
        'Nghiên cứu các quan hệ sản xuất và trao đổi trong mối quan hệ biện chứng với lực lượng sản xuất và kiến trúc thượng tầng',
        'Nghiên cứu quá trình sản xuất kỹ thuật máy móc thuần túy tự nhiên',
        'Nghiên cứu các chính sách hành chính vĩ mô quản lý của chính phủ',
        'Nghiên cứu hành vi tiêu dùng tối đa hóa lợi ích cá nhân trên thị trường'
      ],
      answer: 0
    },
    {
      q: 'Đối tượng nghiên cứu của kinh tế chính trị Mác - Lênin là nghiên cứu các quan hệ sản xuất trong các khâu nào?',
      options: ['Sản xuất - phân phối - trao đổi - tiêu dùng', 'Sản xuất và tiêu dùng cuối cùng', 'Phân phối và lưu thông hàng hóa tiền tệ', 'Sản xuất công nghiệp nặng máy móc chế tạo'],
      answer: 0
    },
    {
      q: 'Việc đẩy mạnh ứng dụng khoa học - công nghệ ở nước ta hiện nay phải gắn liền với yếu tố nào sau đây?',
      options: ['Quá trình công nghiệp hóa, hiện đại hóa đất nước', 'Duy trì công nghệ thủ công truyền thống lạc hậu', 'Hạn chế nhập khẩu máy móc thiết bị từ nước ngoài', 'Bao cấp hoàn toàn chi phí nghiên cứu khoa học từ ngân sách'],
      answer: 0
    },
    {
      q: 'Chức năng tiền tệ là bao gồm những phương tiện nào?',
      options: [
        'Thước đo giá trị, phương tiện lưu thông, cất trữ, thanh toán, tiền tệ thế giới',
        'Phương tiện mua bán hàng hóa tiêu dùng nội địa đơn thuần',
        'Thước đo giá trị cá biệt của sản phẩm tự cấp tự túc',
        'Công cụ đầu cơ chứng khoán tài chính ngắn hạn'
      ],
      answer: 0
    },
    {
      q: 'Ai là người được Mác coi là sáng lập ra kinh tế chính trị tư sản cổ điển?',
      options: ['William Petty', 'Adam Smith', 'David Ricardo', 'Francois Quesnay'],
      answer: 0
    },
    {
      q: 'Nền kinh tế hàng hoá có thể hình thành và phát triển khi có các điều kiện nào?',
      options: [
        'Phân công lao động xã hội và sự tách biệt về mặt kinh tế giữa các chủ thể sản xuất',
        'Chế độ sở hữu nhà nước về toàn bộ tư liệu sản xuất xã hội',
        'Sự quản lý tập trung điều tiết tuyệt đối của cơ quan trung ương',
        'Nhu cầu tích trữ tiêu dùng cá nhân tăng cao tự phát'
      ],
      answer: 0
    },
    {
      q: 'Để tiền biến thành tư bản cần điều kiện gì?',
      options: [
        'Tiền phải đạt số lượng lớn khổng lồ trong tay một cá nhân',
        'Sức lao động phải trở thành hàng hóa một cách phổ biến trên thị trường',
        'Tiền được mang đi mua bán hàng hóa tiêu dùng cá nhân',
        'Tiền được đem gửi vào các tài khoản tiết kiệm ngân hàng lấy lãi sinh hoạt'
      ],
      answer: 1
    },
    {
      q: 'Vai trò của máy móc trong quá trình tạo ra giá trị thặng dư, chọn ý đúng.',
      options: [
        'Máy móc là nguồn gốc trực tiếp đẻ ra giá trị thặng dư mới',
        'Máy móc là tiền đề vật chất, là công cụ giúp chuyển giá trị cũ sang sản phẩm mới chứ bản thân không tự đẻ ra m',
        'Máy móc làm giảm mức độ bóc lột của nhà tư bản đối với công nhân',
        'Máy móc tự động hóa hoàn toàn thay thế lao động sống không cần công nhân'
      ],
      answer: 1
    },
    {
      q: 'Mỗi cuộc cách mạng công nghiệp xuất hiện đều có sự phát triển nhảy vọt về yếu tố nào?',
      options: ['Công cụ lao động / tư liệu lao động', 'Đối tượng lao động tư nhiên', 'Quy mô dân số lao động toàn cầu', 'Chính sách quản lý kinh tế nhà nước'],
      answer: 0
    },
    {
      q: 'Chọn phương án đúng về quy luật kinh tế.',
      options: [
        'Mối liên hệ bản chất, khách quan, lặp đi lặp lại của các hiện tượng kinh tế',
        'Chính sách kinh tế do nhà nước ban hành theo ý chí chủ quan nhằm quản lý xã hội',
        'Quy định pháp luật hành chính điều tiết hoạt động kinh doanh doanh nghiệp',
        'Sự thay đổi tạm thời ngắn hạn của giá cả thị trường tự do'
      ],
      answer: 0
    },
    {
      q: 'Trong nền sản xuất hàng hóa, lạm phát là hiện tượng kinh tế tác động trực tiếp đến khâu nào?',
      options: ['Lưu thông tiền tệ và giá cả hàng hóa', 'Khâu sản xuất nông nghiệp thô', 'Quy trình kiểm định chất lượng sản phẩm', 'Chính sách thuế xuất nhập khẩu hàng hóa'],
      answer: 0
    },
    {
      q: 'Theo quan điểm của kinh tế chính trị, trong tư liệu lao động bộ phận nào quyết định đến năng suất lao động?',
      options: ['Công cụ lao động', 'Hệ thống đường giao thông', 'Nhà xưởng bến bãi kho tàng', 'Bình chứa, ống dẫn vật liệu'],
      answer: 0
    },
    {
      q: 'Trong nền kinh tế thị trường định hướng xã hội chủ nghĩa, thành phần kinh tế nào giữ vai trò chủ đạo/động lực?',
      options: [
        'Kinh tế nhà nước giữ vai trò chủ đạo; kinh tế tư nhân là một động lực quan trọng',
        'Kinh tế tư nhân giữ vai trò chủ đạo toàn bộ nền kinh tế',
        'Kinh tế tập thể giữ vai trò quyết định tối cao độc quyền',
        'Kinh tế có vốn đầu tư nước ngoài là thành phần chủ chốt dẫn dắt'
      ],
      answer: 0
    },
    {
      q: 'Cạnh tranh kinh tế được hiểu là gì?',
      options: [
        'Sự ganh đua giữa các chủ thể kinh tế nhằm giành giật những điều kiện thuận lợi để thu lợi nhuận tối đa',
        'Sự hợp tác toàn diện mang tính thỏa hiệp chia đều thị trường',
        'Mệnh lệnh can thiệp tước đoạt tài sản từ phía cơ quan hành pháp',
        'Hành vi triệt hạ bạo lực đối thủ cạnh tranh ngoài đời thực'
      ],
      answer: 0
    },
    {
      q: 'Đối tượng nghiên cứu của kinh tế- chính trị Mác-Lênin là gì?',
      options: [
        'Quan hệ sản xuất trong mối liên hệ tác động qua lại với lực lượng sản xuất',
        'Lực lượng sản xuất kỹ thuật máy móc công nghệ công nghiệp',
        'Kiến trúc thượng tầng chính trị luật pháp nhà nước thuần túy',
        'Các hiện tượng tự nhiên môi trường sinh thái trong sản xuất'
      ],
      answer: 0
    },
    {
      q: 'Quan hệ về tỷ lượng trong trao đổi giữa các hàng hóa với nhau do cái gì quy định?',
      options: ['Hao phí lao động xã hội cần thiết ẩn chứa bên trong hàng hóa (giá trị)', 'Sở thích chủ quan ngẫu nhiên của người mua và người bán', 'Mức độ khan hiếm vật lý của sản phẩm trên thị trường tự do', 'Quy định áp đặt mức giá cố định từ phía nhà nước'],
      answer: 0
    },
    {
      q: 'Phương hướng cơ bản, lâu dài để tăng sản phẩm xã hội là gì?',
      options: ['Tăng năng suất lao động xã hội dựa trên áp dụng khoa học kỹ thuật', 'Tăng cường độ lao động ép buộc công nhân làm việc cật lực hơn', 'Kéo dài thời gian làm việc trong ngày vô hạn độ', 'Tăng quy mô số lượng lao động thô chưa qua đào tạo'],
      answer: 0
    },
    {
      q: 'Ở Việt Nam cũng như trên thế giới sử dụng thuật ngữ "cách mạng công nghiệp lần thứ tư" với hàm ý gì?',
      options: [
        'Sự tích hợp trí tuệ nhân tạo, internet vạn vật, dữ liệu lớn biến đổi sâu sắc sản xuất',
        'Cuộc cách mạng cơ giới hóa sử dụng máy dệt hơi nước công nghiệp nhẹ',
        'Giai đoạn điện khí hóa dây chuyền sản xuất hàng loạt quy mô lớn',
        'Ứng dụng máy tính điện tử tự động hóa bán phần trong nhà xưởng'
      ],
      answer: 0
    },
    {
      q: 'Chọn câu sai khi nói về đặc điểm của kinh tế thị trường. (Đặc điểm nào dưới đây không phải của kinh tế thị trường?)',
      options: [
        'Các chủ thể kinh tế độc lập, bình đẳng trước pháp luật',
        'Giá cả hoàn toàn do mệnh lệnh hành chính của nhà nước áp đặt cố định dài hạn',
        'Thị trường giữ vai trò quyết định trong phân bổ các nguồn lực kinh tế',
        'Nền kinh tế vận hành công khai minh bạch chịu sự điều tiết của quy luật giá trị'
      ],
      answer: 1
    },
    {
      q: 'Chọn câu sai: Khuyết tật của kinh tế thị trường là gì?',
      options: [
        'Dẫn đến phân hóa giàu nghèo, bất bình đẳng xã hội sâu sắc',
        'Luôn tự động đảm bảo cân bằng cung cầu tuyệt đối không bao giờ xảy ra khủng hoảng',
        'Gây ra ô nhiễm môi trường, cạn kiệt tài nguyên thiên nhiên tự phát',
        'Tiềm ẩn nguy cơ lạm phát, suy thoái kinh tế chu kỳ'
      ],
      answer: 1
    },
    {
      q: 'Yếu tố quyết định đến giá cả hàng hoá là gì? (Kiểu hỏi 1)',
      options: ['Giá trị của chính hàng hóa đó', 'Quan hệ cung cầu trên thị trường', 'Sức mua của đồng tiền lưu thông', 'Thị hiếu chủ quan của người tiêu dùng'],
      answer: 0
    },
    {
      q: 'Trên giác độ kinh tế chính trị, mục tiêu cuối cùng của xuất khẩu tư bản là gì?',
      options: ['Chiếm đoạt giá trị thặng dư tối đa ở nước nhập khẩu tư bản', 'Giúp đỡ nhân đạo phát triển kinh tế cho các nước chậm tiến', 'Xóa bỏ ranh giới chủ quyền giữa các quốc gia toàn cầu', 'Đưa người lao động chính quốc sang tìm kiếm việc làm mới'],
      answer: 0
    },
    {
      q: 'Đâu không phải nằm trong tính tất yếu khách quan của công nghiệp hóa, hiện đại hóa ở Việt Nam ?',
      options: [
        'Xây dựng cơ sở vật chất kỹ thuật cho chủ nghĩa xã hội',
        'Duy trì nền sản xuất nông nghiệp thô lạc hậu tự cung tự cấp lâu dài',
        'Rút ngắn khoảng cách tụt hậu về kinh tế so với các nước trên thế giới',
        'Tăng cường tiềm lực kinh tế, quốc phòng an ninh vững chắc'
      ],
      answer: 1
    },
    {
      q: 'Trong nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam, vai trò của kinh tế nhà nước và kinh tế tư nhân đó là như thế nào?',
      options: [
        'Kinh tế nhà nước giữ vai trò chủ đạo, dẫn dắt; kinh tế tư nhân là một động lực quan trọng của nền kinh tế',
        'Kinh tế tư nhân giữ vai trò chủ đạo nắm giữ mạch máu kinh tế',
        'Kinh tế nhà nước và kinh tế tư nhân hoàn toàn đối lập tiêu diệt lẫn nhau',
        'Hai thành phần kinh tế hoạt động biệt lập không có quan hệ liên kết'
      ],
      answer: 0
    },
    {
      q: 'Cạnh tranh trong chủ nghĩa tư bản dẫn đến hệ quả gì?',
      options: ['Tích tụ và tập trung tư bản, dẫn đến hình thành các tổ chức độc quyền', 'Thủ tiêu hoàn toàn mọi động lực phát triển khoa học công nghệ', 'Làm giảm năng suất lao động xã hội chu kỳ', 'Bình ổn giá cả hàng hóa tiêu dùng cho toàn dân nghèo'],
      answer: 0
    },
    {
      q: 'Mối quan hệ giữa quy luật kinh tế và chính sách kinh tế là như thế nào?',
      options: [
        'Quy luật kinh tế là khách quan, chính sách kinh tế là chủ quan dựa trên nhận thức quy luật',
        'Chính sách kinh tế đẻ ra và quyết định bản chất quy luật kinh tế',
        'Quy luật kinh tế và chính sách kinh tế hoàn toàn trùng khớp làm một',
        'Chính sách kinh tế có thể thay đổi tùy ý không cần tôn trọng quy luật khách quan'
      ],
      answer: 0
    },
    {
      q: 'Chủ nghĩa tư bản ra đời khi nào?',
      options: ['Thời kỳ tan rã của chế độ phong kiến (thế kỷ XVI - XVII)', 'Thời kỳ cổ đại chiếm hữu nô lệ', 'Sau cách mạng công nghiệp lần thứ tư thế kỷ XXI', 'Thời kỳ xã hội cộng sản nguyên thủy phân rã'],
      answer: 0
    },
    {
      q: 'Khi nào sức lao động trở thành hàng hoá một cách phổ biến?',
      options: ['Từ khi phương thức sản xuất tư bản chủ nghĩa được xác lập', 'Từ khi con người biết chế tạo công cụ đá thô sơ', 'Từ khi xuất hiện nền sản xuất hàng hóa giản đơn thời cổ đại', 'Từ khi nhà nước phong kiến thực hiện đại phân công lao động'],
      answer: 0
    },
    {
      q: 'Phân chia theo tiêu chí cấu trúc của các tổ chức tham gia xã hội, thể chế được chia thành loại nào?',
      options: ['Thể chế nhà nước, thể chế phi nhà nước, thể chế tư nhân', 'Thể chế kinh tế, thể chế chính trị, thể chế văn hóa xã hội', 'Thể chế chính thức mang tính pháp lý và thể chế phi chính thức', 'Thể chế trong nước và thể chế quốc tế toàn cầu'],
      answer: 0
    },
    {
      q: 'Công cụ quản lý vĩ mô của nhà nước trong nền kinh tế thị trường định hướng xã hội chủ nghĩa là gì?',
      options: ['Hệ thống pháp luật, chiến lược quy hoạch, kế hoạch và chính sách kinh tế', 'Mệnh lệnh hành chính cưỡng chế thu hồi trực tiếp tài sản doanh nghiệp', 'Giá cả độc quyền áp đặt cố định cho toàn bộ các mặt hàng', 'Hệ thống cơ chế bao cấp cấp phát vật tư trực tiếp từ trung ương'],
      answer: 0
    },
    {
      q: 'Xuất khẩu tư bản được coi là đặc điểm của giai đoạn nào?',
      options: ['Giai đoạn chủ nghĩa tư bản độc quyền', 'Giai đoạn chủ nghĩa tư bản tự do cạnh tranh', 'Giai đoạn tích lũy nguyên thủy của tư bản', 'Giai đoạn kinh tế thị trường sơ khai phong kiến'],
      answer: 0
    },
    {
      q: 'Thể chế được hiểu là gì?',
      options: [
        'Hệ thống quy tắc, luật pháp, bộ máy quản lý điều tiết hành vi con người trong xã hội',
        'Ý chí chủ quan tạm thời của một nhà quản lý doanh nghiệp riêng lẻ',
        'Hệ thống máy móc trang thiết bị công nghệ kỹ thuật nhà xưởng',
        'Thói quen tiêu dùng tự phát của một nhóm cá nhân cá biệt'
      ],
      answer: 0
    },
    {
      q: 'Dựa vào căn cứ nào để chia tư bản ra thành tư bản cố định và tư bản lưu động? (Kiểu hỏi 1)',
      options: [
        'Phương thức dịch chuyển giá trị của các bộ phận tư bản vào sản phẩm mới',
        'Vai trò của các bộ phận tư bản trong việc tạo ra giá trị thặng dư',
        'Mức độ hao mòn tự nhiên vật lý của máy móc trang thiết bị',
        'Tốc độ tăng trưởng về mặt lượng tiền tệ đầu tư ban đầu'
      ],
      answer: 0
    },
    {
      q: 'Những nhân tố nào ảnh hưởng đến quy mô của tích lũy tư bản?',
      options: [
        'Khối lượng giá trị thặng dư, tỷ lệ phân chia m thành tư bản tích lũy và tiêu dùng, năng suất lao động',
        'Sở thích chủ quan của nhà tư bản trong tiêu dùng xa xỉ',
        'Mức độ giảm sút cường độ lao động của người công nhân làm thuê',
        'Chính sách trợ cấp tài chính dài hạn của nhà nước tư sản đại diện'
      ],
      answer: 0
    },
    {
      q: 'Đảng Cộng sản Việt Nam luôn nhấn mạnh tầm quan trọng của việc xây dựng nền kinh tế mang tính chất gì?',
      options: ['Độc lập tự chủ gắn liền với chủ động tích cực hội nhập kinh tế quốc tế', 'Khép kín, hướng nội tự cung tự cấp tuyệt đối chống bên ngoài', 'Lệ thuộc hoàn toàn vào nguồn vốn và viện trợ của nước ngoài', 'Chỉ giao lưu thương mại đơn phương với các nước đang phát triển'],
      answer: 0
    },
    {
      q: 'Tiền tệ ra đời là do nhu cầu nào?',
      options: ['Nhu cầu khách quan của quá trình phát triển sản xuất và trao đổi hàng hóa lâu dài', 'Mệnh lệnh hành chính bắt buộc từ một vị vua thời phong kiến cổ đại', 'Sự thỏa thuận chủ quan tình cờ của các thương nhân tại hội chợ', 'Nhu cầu tích trữ tài sản quý hiếm của giai cấp quý tộc tư hữu'],
      answer: 0
    },
    {
      q: 'Liên kết các doanh nghiệp theo cùng một ngành là theo hình thức liên kết nào?',
      options: ['Liên kết ngang (như Cartel, Syndicate)', 'Liên kết dọc đa ngành (Conglomerate)', 'Liên kết đa quốc gia hỗn hợp toàn cầu', 'Liên kết nhân sự với bộ máy chính phủ'],
      answer: 0
    },
    {
      q: 'Nguồn gốc của giá trị thặng dư từ đâu mà có?',
      options: ['Do lao động sống của công nhân làm thuê tạo ra trong quá trình sản xuất', 'Do hoạt động mua rẻ bán đắt trong khâu lưu thông thị trường', 'Do máy móc tự động hóa thông minh tự đẻ ra trong nhà xưởng', 'Do tài năng quản lý xuất sắc bẩm sinh của nhà tư bản chủ doanh nghiệp'],
      answer: 0
    },
    {
      q: 'Xuất khẩu hàng hoá là đặc điểm của giai đoạn nào? (Xuất khẩu hàng hóa là một trong những đặc điểm của nền sản xuất hay giai đoạn nào?)',
      options: ['Giai đoạn chủ nghĩa tư bản tự do cạnh tranh', 'Giai đoạn chủ nghĩa tư bản độc quyền', 'Thời kỳ tích lũy nguyên thủy tư bản', 'Thời kỳ sơ khai phong kiến kinh tế tự nhiên'],
      answer: 0
    },
    {
      q: 'Nguồn gốc của tích lũy tư bản là gì?',
      options: ['Giá trị thặng dư (m) bị nhà tư bản biến thành tư bản phụ thêm', 'Nguồn vốn vay mượn từ các định chế tài chính quốc tế', 'Tiền tiết kiệm từ thu nhập lao động chân chính của nhà tư bản', 'Khoản trợ cấp phát triển tài chính từ bộ máy nhà nước đại diện'],
      answer: 0
    },
    {
      q: 'Kinh tế- chính trị Mác - Lênin đã kế thừa và phát triển trực tiếp những thành tựu của trường phái nào?',
      options: ['Kinh tế chính trị cổ điển Anh', 'Chủ nghĩa trọng thương phương Tây', 'Chủ nghĩa trọng nông nước Pháp', 'Trường phái kinh tế chính trị học tầm thường tư sản'],
      answer: 0
    },
    {
      q: 'Nguồn gốc chính của lợi nhuận độc quyền cao xuất phát từ đâu?',
      options: [
        'Giá trị thặng dư do công nhân ở xí nghiệp độc quyền và các xí nghiệp khác tạo ra cộng phần giá trị của người sản xuất nhỏ',
        'Sự tài trợ trợ cấp trực tiếp vô điều kiện từ ngân sách quốc gia',
        'Mức độ tăng năng suất lao động tự phát vượt bậc của máy móc thông minh',
        'Lòng hảo tâm tự nguyện đóng góp thêm tiền từ phía người tiêu dùng xã hội'
      ],
      answer: 0
    },
    {
      q: 'Lượng tỷ suất lợi nhuận có mối quan hệ như thế nào với tỷ suất giá trị thặng dư? (Kiểu hỏi 1)',
      options: ['Tỷ suất lợi nhuận (p\') luôn nhỏ hơn tỷ suất giá trị thặng dư (m\')', 'Tỷ suất lợi nhuận luôn lớn hơn tỷ suất giá trị thặng dư', 'Hai tỷ suất luôn luôn bằng nhau về mặt lượng trong mọi điều kiện', 'Không có bất kỳ mối quan hệ liên quan nào về lượng'],
      answer: 0
    },
    
    {
      q: 'Nội dung cơ bản của cách mạng công nghiệp lần thứ nhất đó là gì?',
      options: ['Chuyển từ lao động thủ công dựa trên công cụ thô sơ sang lao động bằng máy móc cơ khí', 'Thay thế máy móc cơ khí bằng dây chuyền điện khí hóa hàng loạt', 'Ứng dụng máy tính điện tử tự động hóa quy trình nhà xưởng', 'Tích hợp công nghệ số hóa sinh học internet vạn vật toàn diện'],
      answer: 0
    },
    {
      q: 'Một trong những đặc điểm chủ yếu của bất kỳ xã hội nào lấy thị trường làm phương tiện có tính cơ sở để phân phối các nguồn lực kinh tế là gì? (Hoặc kiểu hỏi khác về hệ thống pháp quy kiện toàn)',
      options: ['Hệ thống luật pháp kinh tế, thể chế pháp quy kiện toàn minh bạch', 'Sự phân phối của cải cào bằng tuyệt đối giữa các thành viên', 'Nhà nước nắm toàn quyền quyết định chi tiết lượng sản xuất tiêu dùng', 'Không tồn tại bất kỳ một quy luật kinh tế khách quan nào hoạt động'],
      answer: 0
    },
    {
      q: 'Loạt tiền nào được hiểu là phương tiện thanh toán mà giá trị hay sức mua của nó với tư cách là tiền vượt xa chi phí sản xuất ra nó?',
      options: ['Tiền giấy / tiền dấu hiệu giá trị', 'Tiền vàng nguyên chất đúc thỏi', 'Tiền bạc thời cổ đại', 'Hàng hóa trung gian đóng vai trò vật ngang giá'],
      answer: 0
    },
    {
      q: 'Phương pháp sản xuất giá trị thặng dư tuyệt đối và phương pháp sản xuất giá trị thặng dư tương đối có điểm nào giống nhau?',
      options: ['Đều làm tăng thời gian lao động thặng dư của người công nhân để thu được m', 'Đều kéo dài độ dài ngày lao động của công nhân vượt mức bình thường', 'Đều dựa trên cơ sở tăng năng suất lao động xã hội rút ngắn ngày làm việc', 'Đều làm giảm mức độ bóc lột sức lao động của nhà tư bản tư sản'],
      answer: 0
    },
    {
      q: 'Những ngành nào sẽ được nhà nước tư sản đầu tư thay cho giai cấp tư sản tư nhân?',
      options: ['Ngành kết cấu hạ tầng, ngành có vốn lớn lợi nhuận thấp rủi ro cao thu hồi chậm', 'Ngành kinh doanh dịch vụ giải trí tài chính thu lời nhanh chóng', 'Ngành sản xuất hàng tiêu dùng thời trang xa xỉ nội địa', 'Ngành thương mại xuất nhập khẩu nông sản có lợi nhuận cao độc quyền'],
      answer: 0
    },
    {
      q: 'Khối lượng giá trị thặng dư được tính bằng công thức nào?',
      options: ['M = m\' x V', 'M = (m / v) x 100%', 'M = c + v + m', 'M = p\' x (C + V)'],
      answer: 0
    },
    {
      q: 'Sản xuất hàng hóa là kiểu tổ chức kinh tế như thế nào?',
      options: ['Sản phẩm làm ra để trao đổi, mua bán trên thị trường thỏa mãn nhu cầu người khác', 'Sản phẩm làm ra để tự cung tự cấp tiêu dùng trong nội bộ gia đình', 'Sản phẩm làm ra chỉ để tích trữ lâu dài làm giàu không mang trao đổi', 'Sản phẩm được nhà nước phân phối phân phát trực tiếp theo định mức'],
      answer: 0
    },
    {
      q: 'Tư duy của Đảng về kinh tế thị trường trong việc xây dựng chủ nghĩa xã hội là như thế nào?',
      options: ['Kinh tế thị trường không đối lập với CNXH, là thành tựu chung của nhân loại phục vụ xây dựng CNXH', 'Kinh tế thị trường là sản phẩm độc quyền tư sản cần phải loại bỏ ngay', 'Kinh tế thị trường và chủ nghĩa xã hội hoàn toàn bài trừ triệt tiêu lẫn nhau', 'Kinh tế thị trường chỉ tồn tại tạm thời ngắn hạn vài năm đầu quá độ'],
      answer: 0
    },
    {
      q: 'Tích lũy tư bản là quá trình gì?',
      options: ['Biến một phần giá trị thặng dư thành tư bản phụ thêm (tư bản bất biến và khả biến phụ thêm)', 'Tích trữ thật nhiều tiền giấy nội tệ trong két sắt nhà tư sản', 'Hợp nhất các xí nghiệp nhỏ lẻ thành một tập đoàn độc quyền khổng lồ', 'Nhà nước tư sản trưng thu gom góp vốn từ toàn xã hội tư hữu'],
      answer: 0
    },
    {
      q: 'Thị trường giải quyết ba vấn đề kinh tế nào?',
      options: ['Sản xuất cái gì? Sản xuất như thế nào? Sản xuất cho ai?', 'Sản xuất ở đâu? Sản xuất khi nào? Ai sản xuất?', 'Sản xuất bằng máy gì? Bán giá bao nhiêu? Mua ở đâu?', 'Nhà nước cần gì? Doanh nghiệp làm gì? Người dân mua gì?'],
      answer: 0
    },
    {
      q: 'Xuất khẩu tư bản là gì?',
      options: ['Đầu tư tư bản ra nước ngoài nhằm mục đích chiếm đoạt giá trị thặng dư tại nước sở tại', 'Mang hàng hóa sản xuất trong nước ra thị trường quốc tế để bán thu ngoại tệ', 'Cho các nước nghèo vay tiền viện trợ nhân đạo không hoàn lại vô điều kiện', 'Thuê mướn nhân công chất lượng cao từ nước ngoài về làm việc tại chính quốc'],
      answer: 0
    },
    {
      q: 'Chỉ có sản phẩm của những lao động tư nhân độc lập và không phụ thuộc vào nhau mới đối diện với nhau như những cái gì?',
      options: ['Hàng hóa', 'Sản phẩm tự cấp', 'Vật phẩm biếu tặng', 'Tư liệu tiêu dùng nội bộ'],
      answer: 0
    },
    {
      q: 'Căn cứ vào đâu để chia ra thành tái sản xuất giản đơn và tái sản xuất mở rộng?',
      options: ['Quy mô của quá trình sản xuất có được mở rộng hay giữ nguyên qua các chu kỳ', 'Hình thái vật chất của sản phẩm làm ra thuộc khu vực I hay II', 'Mức độ hiện đại của công nghệ kỹ thuật máy móc áp dụng nhà xưởng', 'Tốc độ chu chuyển nhanh hay chậm của toàn bộ khối lượng vốn bỏ ra'],
      answer: 0
    },
    {
      q: 'Trong kinh tế hàng hóa, cạnh tranh có tác dụng gì?',
      options: ['Buộc các chủ thể cải tiến kỹ thuật, tăng năng suất, giảm chi phí đào thải yếu kém', 'Làm triệt tiêu hoàn toàn mọi động lực phát triển kinh tế xã hội', 'Tạo ra sự công bằng cào bằng tuyệt đối về lợi nhuận giữa các xí nghiệp', 'Giữ cho giá cả hàng hóa luôn cố định bất biến không bao giờ dao động'],
      answer: 0
    },
    {
      q: 'Lượng lợi nhuận có quan hệ về mặt lượng như thế nào với lượng giá trị thặng dư?',
      options: ['Lợi nhuận (p) có thể cao hơn, thấp hơn hoặc bằng lượng giá trị thặng dư (m) tùy cung cầu', 'Lợi nhuận luôn luôn nhỏ hơn giá trị thặng dư trong mọi điều kiện thị trường', 'Lợi nhuận luôn luôn lớn hơn giá trị thặng dư tuyệt đối', 'Hai đại lượng hoàn toàn không có mối quan hệ gì về lượng với nhau'],
      answer: 0
    },
    {
      q: 'Tăng năng suất lao động và tăng cường độ lao động giống nhau ở điểm nào?',
      options: ['Đều làm tăng tổng số lượng sản phẩm sản xuất ra trong một đơn vị thời gian', 'Đều làm giảm lượng giá trị chứa đựng trong một đơn vị hàng hóa cá biệt', 'Đều giữ nguyên mức độ tiêu hao cơ bắp trí lực của người lao động sống', 'Đều làm tăng giá trị của một đơn vị sản phẩm làm ra rệt'],
      answer: 0
    },
    {
      q: 'Chi phí thực tế của xã hội để sản xuất hàng hoá là bao gồm những chi phí nào?',
      options: ['Lao động quá khứ (c) và lao động sống (v + m)', 'Chi phí tư bản bất biến (c) và tư bản khả biến (v) của nhà tư bản', 'Tiền mua máy móc thiết bị và trả lương cho công nhân', 'Khoản tiền thuế nộp cho nhà nước tư sản đại diện'],
      answer: 0
    },
    {
      q: 'Quy luật chung của tích luỹ tư bản là gì? Ý nào sau đây không đúng. (Hoặc kiểu hỏi khác: Tích lũy tư bản là gì?)',
      options: ['Tích lũy tư bản làm cho giai cấp công nhân ngày càng giàu có thịnh vượng bằng nhà tư bản', 'Tích lũy tư bản dẫn đến tích tụ và tập trung tư bản quy mô ngày càng lớn', 'Tích lũy tư bản làm tăng cấu tạo hữu cơ của tư bản c/v', 'Tích lũy tư bản làm trầm trọng thêm phân hóa giàu nghèo bần cùng hóa vô sản'],
      answer: 0
    },
    {
      q: 'Giá trị cá biệt của hàng hoá do yếu tố nào quyết định?',
      options: ['Hao phí lao động cá biệt của chính chủ thể sản xuất ra hàng hóa đó', 'Hao phí lao động xã hội cần thiết trung bình của toàn ngành', 'Sự thỏa thuận ngẫu nhiên giữa người mua và người bán trên thị trường', 'Mức giá cả quy định sẵn của cơ quan quản lý vĩ mô nhà nước'],
      answer: 0
    },
    {
      q: 'Lưu thông hàng hoá dựa trên nguyên tắc ngang giá. Điều này được hiểu như thế nào là đúng?',
      options: ['Giá cả thị trường xoay quanh trục giá trị hàng hóa dưới tác động cung cầu', 'Giá cả của mọi hàng hóa luôn luôn bằng đúng giá trị trong mọi giao dịch', 'Mọi người mang hàng hóa có giá trị sử dụng bằng nhau ra đổi lấy nhau', 'Nhà nước bắt buộc người bán phải bán đúng giá chi phí bỏ ra'],
      answer: 0
    },
    {
      q: 'Những thành tựu và hạn chế của chủ nghĩa tư bản bắt nguồn từ mâu thuẫn nào?',
      options: ['Mâu thuẫn giữa lực lượng sản xuất xã hội hóa cao với chế độ chiếm hữu tư nhân TBCN', 'Mâu thuẫn giữa các tập đoàn độc quyền quốc tế tư nhân với nhau', 'Mâu thuẫn giữa nông dân và địa chủ trong xã hội phong kiến cũ', 'Mâu thuẫn giữa các nước tư bản phát triển với thế giới thứ ba'],
      answer: 0
    },
    {
      q: 'Nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam có tính chất gì?',
      options: ['Vừa tuân theo quy luật kinh tế thị trường vừa dựa trên cơ sở chịu sự dẫn dắt của bản chất chủ nghĩa xã hội', 'Mang tính chất tự cung tự cấp khép kín hoàn toàn hướng nội', 'Mang bản chất của nền kinh tế thị trường tư bản chủ nghĩa hoàn chỉnh', 'Là nền kinh tế bao cấp mệnh lệnh kế hoạch hóa tuyệt đối từ trung ương'],
      answer: 0
    },
    {
      q: 'Chi phí sản xuất tư bản chủ nghĩa có mối quan hệ về lượng như thế nào với giá trị hàng hóa?',
      options: ['Chi phí sản xuất tư bản (k = c + v) luôn nhỏ hơn giá trị hàng hóa (W = c + v + m)', 'Chi phí sản xuất tư bản luôn luôn lớn hơn giá trị hàng hóa tuyệt đối', 'Chi phí sản xuất tư bản luôn bằng đúng giá trị hàng hóa làm ra', 'Không có mối liên hệ lượng nào cố định'],
      answer: 0
    },
    {
      q: 'Nhân tố nào là cơ bản thúc đẩy chủ nghĩa tư bản ra đời nhanh chóng?',
      options: ['Quá trình tích lũy nguyên thủy của tư bản (tước đoạt người sản xuất nhỏ và tích lũy tiền)', 'Sự xuất hiện tự phát của tiền tệ thời cổ đại chiếm hữu nô lệ', 'Lòng hảo tâm của giai cấp địa chủ phong kiến nhường quyền lực', 'Sự tăng trưởng dân số tự nhiên quá nhanh của xã hội vô sản'],
      answer: 0
    },
    {
      q: 'Độc quyền nhà nước trong chủ nghĩa tư bản hình thành dựa trên bao nhiêu nguyên nhân?',
      options: ['4 nguyên nhân chủ yếu', '2 nguyên nhân', '3 nguyên nhân', '5 nguyên nhân'],
      answer: 0
    },
    {
      q: 'Công thức về giá trị hàng hóa G = c + (v+m). Vậy c là biểu hiện của giá trị nào?',
      options: ['Giá trị tư bản bất biến (giá trị tư liệu sản xuất đã hao phí)', 'Giá trị tư bản khả biến (tiền lương trả cho công nhân)', 'Giá trị thặng dư do công nhân làm thuê tạo thêm', 'Giá trị mới tinh do lao động sống tạo ra'],
      answer: 0
    },
    {
      q: 'If nhà tư bản trả đúng giá trị sức lao động của người công nhân, thì nhà tư bản có thu được giá trị thặng dư hay không?',
      options: ['Vẫn thu được m vì công nhân lao động tạo ra lượng giá trị mới lớn hơn giá trị sức lao động của mình', 'Không thu được m vì đã trả sòng phẳng đúng giá trị trao đổi', 'Thu được m ít hơn so với khi trả dưới giá trị sức lao động', 'Không thu được m mà bị thua lỗ chi phí sản xuất bỏ ra'],
      answer: 0
    },
    {
      q: 'Phương thức sản xuất tư bản chủ nghĩa được thiết lập và phát triển qua các giai đoạn nào sau đây?',
      options: ['Chủ nghĩa tư bản tự do cạnh tranh và chủ nghĩa tư bản độc quyền', 'Chủ nghĩa trọng thương và chủ nghĩa trọng nông phương Tây', 'Chủ nghĩa tư bản sơ khai phong kiến và chủ nghĩa tư bản hiện đại', 'Chủ nghĩa tư bản độc quyền tư nhân và chủ nghĩa xã hội sơ khởi'],
      answer: 0
    },
    {
      q: 'Địa tô tư bản là gì?',
      options: ['Phần giá trị thặng dư siêu ngạch ngoài lợi nhuận bình quân mà nhà tư bản thuê đất phải nộp cho địa chủ', 'Toàn bộ lợi nhuận mà nhà tư bản kinh doanh nông nghiệp thu được', 'Khoản tiền thuế nông nghiệp nộp cho cơ quan bộ máy nhà nước', 'Tiền thuê đất tính theo diện tích bề mặt ruộng đất thô'],
      answer: 0
    },
    {
      q: 'Mọi tư bản đều biểu hiện dưới dạng tiền, nhưng tiền không phải là tư bản. Vậy khi nào tiền trở thành tư bản?',
      options: ['Khi tiền được đem vào lưu thông với mục đích thu về giá trị thặng dư (sinh lời)', 'Khi tiền đạt số lượng cực lớn tích trữ trong két sắt nhà giàu', 'Khi tiền được mang đi mua sắm nhu yếu phẩm tiêu dùng hàng ngày', 'Khi tiền được đúc bằng vàng nguyên chất quý hiếm thời cổ đại'],
      answer: 0
    },
    {
      q: 'Xuất khẩu tư bản là đặc điểm của phương thức sản xuất hay giai đoạn nào?',
      options: ['Giai đoạn chủ nghĩa tư bản độc quyền', 'Giai đoạn chủ nghĩa tư bản tự do cạnh tranh', 'Thời kỳ tích lũy nguyên thủy tư bản chủ nghĩa', 'Nền kinh tế hàng hóa giản đơn thời kỳ phong kiến cũ'],
      answer: 0
    },
    {
      q: 'Mục đích trực tiếp của nền sản xuất tư bản chủ nghĩa là gì?',
      options: ['Sản xuất ra giá trị thặng dư tối đa cho nhà tư bản', 'Thỏa mãn nhu cầu tiêu dùng thiết yếu của toàn thể nhân dân', 'Phát triển lực lượng sản xuất xã hội cân bằng văn minh', 'Xóa bỏ hoàn toàn tình trạng thất nghiệp nghèo đói trong xã hội'],
      answer: 0
    },
    {
      q: 'Các hình thức cơ bản của địa tô tư bản chủ nghĩa gồm những loại nào?',
      options: ['Địa tô chênh lệch và địa tô tuyệt đối', 'Địa tô độc quyền và địa tô thâm canh', 'Địa tô chênh lệch I và địa tô chênh lệch II', 'Địa tô vị trí và địa tô màu mỡ tư nhiên đất'],
      answer: 0
    },
    {
      q: 'Điểm giống nhau giữa địa tô chênh lệch và địa tô tuyệt đối là gì? (Kiểu hỏi 1)',
      options: ['Đều có nguồn gốc từ giá trị thặng dư do công nhân nông nghiệp tạo ra', 'Đều thu được trên mọi loại ruộng đất bất kể tốt xấu thuận lợi', 'Đều hình thành do sự độc quyền tư hữu ruộng đất ngăn cản tự do', 'Đều phụ thuộc trực tiếp vào mức độ thâm canh đầu tư thêm vốn'],
      answer: 0
    },
    {
      q: 'Trong lĩnh vực chính trị, các chính phủ nghị viện tư sản hiện đại được tổ chức giống với mô hình nào?',
      options: ['Mô hình công ty cổ phần (các chính trị gia như người quản lý, đại biểu như cổ đông)', 'Mô hình quân chủ tập quyền phong kiến trung cổ', 'Bộ máy quản lý hành chính tập trung mệnh lệnh tuyệt đối', 'Mô hình liên bang tự trị không có chính phủ trung ương điều hành'],
      answer: 0
    },
    {
      q: 'V.I. Lênin đã phân tích chủ nghĩa tư bản độc quyền bằng các đặc điểm kinh tế cơ bản nào sau đây?',
      options: ['5 đặc điểm kinh tế cơ bản (tập trung sản xuất, tư bản tài chính, xuất khẩu tư bản, phân chia thị trường, phân chia lãnh thổ)', '3 đặc điểm kinh tế vĩ mô sơ khởi tư sản', '4 đặc điểm liên minh độc quyền tư nhân nội địa', '6 đặc điểm xâm lược thuộc địa vũ trang toàn cầu'],
      answer: 0
    },
    {
      q: 'Trong giai đoạn chủ nghĩa tư bản cạnh tranh tự do, quy luật giá trị thặng dư biểu hiện thành quy luật nào?',
      options: ['Quy luật lợi nhuận bình quân', 'Quy luật lợi nhuận độc quyền cao áp đặt', 'Quy luật giá cả sản xuất điều tiết thị trường', 'Quy luật tích lũy nguyên thủy tư bản'],
      answer: 0
    },
    {
      q: 'Sự phát triển của trình độ xã hội hóa lực lượng sản xuất đòi hỏi nhà nước can thiệp như thế nào vào kinh tế?',
      options: ['Can thiệp sâu rộng, điều tiết vĩ mô nền kinh tế để duy trì sự sinh tồn của hệ thống', 'Hoàn toàn đứng ngoài không can thiệp, để thị trường tự do tuyệt đối', 'Quốc hữu hóa triệt để xóa bỏ hoàn toàn mọi thành phần kinh tế tư nhân', 'Chỉ can thiệp bằng biện pháp quân sự vũ lực cưỡng chế khi có bạo động'],
      answer: 0
    },
    {
      q: 'Nhà nước tư sản đảm nhận đầu tư kinh doanh vào các ngành có đặc điểm gì?',
      options: ['Vốn lớn, thu hồi chậm, lợi nhuận thấp rủi ro cao nhưng cần thiết cho xã hội hóa', 'Lợi nhuận siêu ngạch cực nhanh, rủi ro thấp độc quyền', 'Sản xuất hàng tiêu dùng thời trang may mặc nội địa sinh lời ngay', 'Kinh doanh dịch vụ tài chính tiền tệ ngân hàng thương mại lớn'],
      answer: 0
    },
    {
      q: 'Hai hình thức của tiền công cơ bản là những hình thức nào?',
      options: ['Tiền công tính theo thời gian và tiền công tính theo sản phẩm', 'Tiền công danh nghĩa và tiền công thực tế cuộc sống', 'Tiền công bằng tiền mặt và tiền công bằng hiện vật hàng hóa', 'Tiền công cố định tháng và tiền công thưởng hiệu suất năm'],
      answer: 0
    },
    {
      q: 'Có hai hình thức trả tiền công của nhà tư bản đó là những hình thức nào?',
      options: ['Trả công theo thời gian và trả công theo sản phẩm làm ra', 'Trả công bằng tiền và trả công bằng phiếu mua hàng hóa', 'Trả công danh nghĩa và trả công thực tế tiêu dùng', 'Trả công trực tiếp tháng và trả công gián tiếp quý'],
      answer: 0
    },
    {
      q: 'Giá cả sản xuất tư bản chủ nghĩa bằng công thức nào?',
      options: ['Giá cả sản xuất = k + p_bar (Chi phí sản xuất + Lợi nhuận bình quân)', 'Giá cả sản xuất = c + v + m (Giá trị hàng hóa gốc)', 'Giá cả sản xuất = k + p (Chi phí sản xuất + Lợi nhuận cá biệt)', 'Giá cả sản xuất = c + v (Chi phí sản xuất thực tế xã hội)'],
      answer: 0
    },
    {
      q: 'Giá trị thặng dư siêu ngạch là giá trị thặng dư có được do điều kiện nào?',
      options: ['Do doanh nghiệp áp dụng kỹ thuật tiên tiến làm năng suất lao động cá biệt cao hơn năng suất trung bình', 'Do kéo dài tuyệt đối ngày lao động vượt mức tối đa quy định', 'Do tăng cường độ lao động làm việc khẩn trương ép công nhân', 'Do giảm tiền lương công nhân xuống dưới mức giá trị sức lao động'],
      answer: 0
    },
    {
      q: 'Tuần hoàn tư bản công nghiệp là gì?',
      options: ['Sự vận động của tư bản trải qua 3 giai đoạn, 3 hình thái, thực hiện chức năng rồi quay về hình thái ban đầu sinh lời', 'Quá trình tư bản tăng quy mô bằng cách gộp các xí nghiệp nhỏ lại', 'Sự chu chuyển định kỳ lập đi lập lại liên tục của tư bản bỏ ra', 'Việc mang tư bản đi mua bán chứng khoán trên thị trường tài chính'],
      answer: 0
    },
    {
      q: 'Chọn ý đúng về tăng NSLĐ và tăng cường độ lao động trong mối quan hệ với sản phẩm và giá trị đơn vị hàng hóa.',
      options: ['Tăng NSLĐ làm sản phẩm tăng, giá trị 1 hàng hóa giảm; Tăng cường độ lao động làm sản phẩm tăng, giá trị 1 hàng hóa không đổi', 'Cả hai đều làm tăng sản phẩm và làm giảm giá trị đơn vị hàng hóa', 'Tăng NSLĐ giữ nguyên sản phẩm; Tăng cường độ lao động giảm sản phẩm', 'Cả hai đều không làm thay đổi lượng giá trị của một đơn vị sản phẩm'],
      answer: 0
    },
    {
      q: 'Tư bản cố định là bộ phận tư bản khi tham gia quá trình sản xuất có đặc điểm dịch chuyển giá trị như thế nào?',
      options: ['Chuyển dần từng phần vào sản phẩm mới qua nhiều chu kỳ sản xuất (như máy móc, nhà xưởng)', 'Chuyển toàn bộ giá trị vào sản phẩm mới ngay trong một chu kỳ sản xuất', 'Biến đổi về mặt lượng tăng thêm giá trị thặng dư trong quy trình', 'Không dịch chuyển bất kỳ giá trị nào mà giữ nguyên hình thái vật chất'],
      answer: 0
    },
    {
      q: 'Công thức chung của tư bản phản ánh điều gì?',
      options: ['Mục đích của tư bản là lớn lên, tạo ra giá trị thặng dư tăng thêm (T\')', 'Sự bình đẳng tuyệt đối trong trao đổi mua bán hàng hóa thị trường', 'Quy luật lưu thông tiền tệ giản đơn vật đổi vật thời cổ đại', 'Sự phụ thuộc của nhà tư bản vào người lao động làm thuê'],
      answer: 0
    },
    {
      q: 'Tuần hoàn tư bản công nghiệp là sự thống nhất của ba hình thái tuần hoàn nào?',
      options: ['Tuần hoàn tư bản tiền tệ, tư bản sản xuất và tư bản hàng hóa', 'Tuần hoàn tư bản cố định, tư bản lưu động và tư bản khả biến', 'Tuần hoàn tư bản bất biến, tư bản khả biến và tư bản độc quyền', 'Tuần hoàn tư bản nội địa, tư bản xuất khẩu và tư bản cho vay'],
      answer: 0
    },
    {
      q: 'Nguồn gốc chủ yếu của tích lũy tư bản là gì?',
      options: ['Giá trị thặng dư do giai cấp công nhân làm thuê tạo ra', 'Nguồn tài chính viện trợ từ bộ máy nhà nước đại diện tư sản', 'Khoản tiền tiết kiệm tiêu dùng cá nhân của nhà tư bản chủ xí nghiệp', 'Tiền thắng thầu đầu cơ tài chính chứng khoán thị trường'],
      answer: 0
    },
    {
      q: 'Tiền lương tính theo sản phẩm là gì?',
      options: ['Hình thức trả công căn cứ vào số lượng sản phẩm làm ra đảm bảo chất lượng quy định', 'Hình thức trả công căn cứ vào độ dài thời gian lao động của công nhân', 'Khoản tiền thưởng thêm cuối năm khi doanh nghiệp có lợi nhuận cao', 'Hình thức trả bằng chính vật phẩm hàng hóa do công nhân sản xuất'],
      answer: 0
    },
    {
      q: 'Căn cứ phân chia tư bản bất biến và tư bản khả biến là dựa vào đâu?',
      options: ['Vai trò khác nhau của các bộ phận tư bản trong việc tạo ra giá trị thặng dư (m)', 'Phương thức dịch chuyển giá trị nhanh hay chậm vào sản phẩm mới', 'Hình thái biểu hiện bên ngoài bằng tiền hay bằng hiện vật vật chất', 'Thời gian chu chuyển của các bộ phận tư bản dài hay ngắn'],
      answer: 0
    },
    {
      q: 'Chu chuyển tư bản là gì?',
      options: ['Tuần hoàn tư bản nếu xét nó là một quá trình định kỳ, đổi mới và thường xuyên lặp đi lặp lại không ngừng', 'Sự di chuyển của tư bản từ ngành này sang ngành khác để tìm lời', 'Quá trình mang tư bản đi đầu tư trực tiếp ra thị trường nước ngoài', 'Sự thay đổi hình thái tư bản từ tiền thành hàng hóa trên thị trường'],
      answer: 0
    },
    {
      q: 'Mức độ giàu có của xã hội phụ thuộc chủ yếu vào yếu tố nào?',
      options: ['Khối lượng giá trị sử dụng (của cải vật chất) được tạo ra cho xã hội', 'Số lượng tiền giấy in ra lưu thông trong nền kinh tế nội địa', 'Mức giá cả hàng hóa đắt đỏ trên thị trường tự do cạnh tranh', 'Quy mô tích trữ vàng bạc kim loại quý trong kho tàng nhà nước'],
      answer: 0
    },
    {
      q: 'Tư bản bất biến (c) và tư bản khả biến (v) thuộc phạm trù tư bản nào?',
      options: ['Tư bản ứng trước xét theo vai trò tạo ra giá trị thặng dư', 'Tư bản chu chuyển xét theo phương thức chuyển giá trị sản phẩm', 'Tư bản độc quyền nhà nước liên minh tài phiệt tư sản', 'Tư bản cho vay tín dụng ngân hàng thương mại'],
      answer: 0
    },
    {
      q: 'Tiền công tư bản có hai hình thức đó là hình thức nào? (danh nghĩa, thực tế, mặt, hàng hóa...)',
      options: ['Tiền công danh nghĩa và tiền công thực tế', 'Tiền công bằng tiền mặt và tiền công bằng hàng hóa', 'Tiền công cố định và tiền công biến đổi theo thưởng', 'Tiền công thời gian và tiền công sản phẩm gốc'],
      answer: 0
    },
    {
      q: 'Nguồn gốc chủ yếu của tích tụ tư bản là gì?',
      options: ['Giá trị thặng dư được nhà tư bản giữ lại tái đầu tư mở rộng sản xuất', 'Sự sáp nhập nhiều xí nghiệp nhỏ thành xí nghiệp khổng lồ', 'Vốn vay ưu đãi từ hệ thống ngân hàng thương mại tài chính', 'Nguồn trợ cấp đầu tư từ chính phủ bộ máy nhà nước tư sản'],
      answer: 0
    },
    {
      q: 'Về lượng tỷ suất lợi nhuận (p\') có đặc điểm như thế nào?',
      options: ['Luôn luôn nhỏ hơn tỷ suất giá trị thặng dư (m\') về mặt lượng', 'Luôn luôn lớn hơn tỷ suất giá trị thặng dư trong mọi hoàn cảnh', 'Luôn bằng đúng với tỷ suất giá trị thặng dư của xí nghiệp độc quyền', 'Dao động hoàn toàn tự phát độc lập không liên quan gì m\''],
      answer: 0
    },
    {
      q: 'Tư bản lưu động là bộ phận tư bản khi tham gia quá trình sản xuất có đặc điểm dịch chuyển giá trị như thế nào và bao gồm những gì?',
      options: ['Chuyển toàn bộ giá trị vào sản phẩm mới trong một chu kỳ sản xuất; gồm nguyên vật liệu, sức lao động', 'Chuyển từng phần giá trị qua nhiều chu kỳ; gồm máy móc nhà xưởng', 'Không chuyển dịch giá trị mà bị tiêu hao mất đi hoàn toàn vật chất', 'Chỉ bao gồm tiền mặt gửi tại các tài khoản ngân hàng thương mại'],
      answer: 0
    },
    {
      q: 'Giá trị thặng dư tương đối có được do điều kiện nào?',
      options: ['Tăng năng suất lao động xã hội làm hạ giá trị tư liệu sinh hoạt để rút ngắn thời gian tất yếu', 'Kéo dài tuyệt đối ngày lao động vượt mức thời gian lao động tất yếu', 'Tăng cường độ lao động của công nhân ép làm việc khẩn trương khốc liệt', 'Cắt giảm trực tiếp tiền lương công nhân dưới mức giá trị sức lao động'],
      answer: 0
    },
    {
      q: 'Tập trung tư bản là quá trình gì?',
      options: ['Sự hợp nhất các tư bản cá biệt có sẵn trong xã hội thành một tư bản lớn hơn', 'Tăng quy mô tư bản cá biệt bằng cách tích lũy giá trị thặng dư làm giàu', 'Nhà nước tư sản đầu tư ngân sách xây dựng khu công nghiệp khổng lồ', 'Gom góp tiền tiết kiệm nhỏ lẻ của người dân qua kênh bưu điện'],
      answer: 0
    },
    {
      q: 'Thế nào là lao động cụ thể?',
      options: ['Lao động có ích dưới một hình thức cụ thể của một nghề nghiệp chuyên môn nhất định', 'Lao động thô sơ cơ bắp chưa qua bất kỳ trường lớp đào tạo nào', 'Sự tiêu hao sức thần kinh, cơ bắp của con người nói chung không kể hình thức', 'Lao động trí óc chất lượng cao của các chuyên gia đầu ngành xã hội'],
      answer: 0
    },
    {
      q: 'Ba giai đoạn vận động của tuần hoàn tư bản công nghiệp là gì?',
      options: ['Giai đoạn mua (lưu thông) -> Giai đoạn sản xuất -> Giai đoạn bán (lưu thông)', 'Giai đoạn tích lũy -> Giai đoạn sản xuất -> Giai đoạn tiêu dùng', 'Giai đoạn vay vốn -> Giai đoạn đầu tư xí nghiệp -> Giai đoạn thu lời', 'Giai đoạn phân phối -> Giai đoạn trao đổi -> Giai đoạn tiêu dùng cuối'],
      answer: 0
    },
    {
      q: 'Xét về giá trị của hàng hóa, hàng hóa càng khan hiếm thì yếu tố nào thay đổi?',
      options: ['Giá cả thị trường sẽ tăng cao vượt xa giá trị thực tế hàng hóa', 'Giá trị xã hội cần thiết của hàng hóa tự động bị sụt giảm sút', 'Hao mòn hữu hình của hàng hóa chứa đựng tăng lên nhanh chóng', 'Giá trị sử dụng của sản phẩm tự động biến đổi hoàn toàn'],
      answer: 0
    },
    {
      q: 'Các phương thức sản xuất nối tiếp nhau trong lịch sử theo trình tự nào?',
      options: ['Cộng sản nguyên thủy -> Chiếm hữu nô lệ -> Phong kiến -> Tư bản chủ nghĩa -> Cộng sản chủ nghĩa', 'Phong kiến -> Chiếm hữu nô lệ -> Tư bản chủ nghĩa -> Xã hội chủ nghĩa', 'Cộng sản nguyên thủy -> Phong kiến -> Chiếm hữu nô lệ -> Tư bản chủ nghĩa', 'Tư bản chủ nghĩa -> Phong kiến -> Chiếm hữu nô lệ -> Cộng sản chủ nghĩa'],
      answer: 0
    },
    {
      q: 'Sản xuất hàng hoá xuất hiện dựa trên căn cứ nào?',
      options: ['Phân công lao động xã hội và sự tách biệt về kinh tế của các chủ thể sản xuất', 'Mệnh lệnh bắt buộc phát triển kinh tế của nhà nước thời cổ đại', 'Nhu cầu trao đổi vật phẩm tự cấp tự túc nội bộ bộ tộc lớn', 'Sự xuất hiện của tiền tệ bằng vàng nguyên chất quý hiếm'],
      answer: 0
    },
    {
      q: 'Hiểu thế nào là lao động giản đơn?',
      options: ['Lao động không đòi hỏi phải có sự đào tạo chuyên môn kỹ năng trước chuyên nghiệp', 'Lao động làm việc nhẹ nhàng không tiêu tốn chút cơ bắp thần kinh nào', 'Lao động của người nông dân sản xuất nông nghiệp thô truyền thống', 'Lao động tự động hóa hoàn toàn có máy móc thông minh hỗ trợ'],
      answer: 0
    },
    {
      q: 'Sức lao động là gì?',
      options: ['Toàn bộ những năng lực thể lực và trí lực tồn tại trong cơ thể một con người sống dùng vào sản xuất', 'Hành vi lao động thực tế đang diễn ra tại các nhà xưởng xí nghiệp', 'Kết quả vật chất cụ thể do bàn tay người lao động làm ra sản phẩm', 'Thời gian làm việc ghi trên hợp đồng lao động ký với chủ'],
      answer: 0
    },
    {
      q: 'Tư bản khả biến (V) là bộ phận trực tiếp tạo ra cái gì?',
      options: ['Giá trị thặng dư (m) mới tăng thêm cho nhà tư bản', 'Hình thái vật chất cụ thể giá trị sử dụng của sản phẩm', 'Giá trị của máy móc trang thiết bị nhà xưởng cũ tiêu hao', 'Toàn bộ chi phí nguyên vật liệu đầu vào xí nghiệp'],
      answer: 0
    },
    {
      q: 'Giá trị sức lao động được đo gián tiếp bằng yếu tố nào?',
      options: ['Giá trị các tư liệu sinh hoạt cần thiết để tái sản xuất ra sức lao động công nhân và nuôi gia đình', 'Số lượng sản phẩm làm ra trong một ngày lao động cật lực', 'Mức độ giàu có sang trọng của ông chủ nhà tư bản xí nghiệp', 'Lượng tiền mặt in ra tối đa của ngân hàng trung ương quốc gia'],
      answer: 0
    },
    {
      q: 'Mâu thuẫn cơ bản của sản xuất hàng hóa là gì?',
      options: ['Mâu thuẫn giữa lao động tư nhân và lao động xã hội', 'Mâu thuẫn giữa lao động giản đơn và lao động phức tạp', 'Mâu thuẫn giữa người sản xuất công nghiệp và người sản xuất nông nghiệp', 'Mâu thuẫn giữa giá trị sử dụng và giá cả thị trường tự do'],
      answer: 0
    },
    {
      q: 'Hai hàng hoá trao đổi được với nhau vì lý do gì?',
      options: ['Chúng đều là sản phẩm của lao động, có cơ sở chung là hao phí lao động trừu tượng (giá trị)', 'Chúng có giá trị sử dụng hoàn toàn giống hệt nhau về công năng', 'Chúng có mức độ khan hiếm tự nhiên tương đương trên thị trường', 'Do nhà nước quy định ép buộc trao đổi ngang bằng nhau'],
      answer: 0
    },
    {
      q: 'Khi nghiên cứu phương thức sản xuất TBCN, C.Mác bắt đầu từ phạm trù nào?',
      options: ['Hàng hóa', 'Tiền tệ', 'Giá trị thặng dư', 'Tích lũy tư bản'],
      answer: 0
    },
    {
      q: 'Trong những trường hợp nào sau đây của hao phí lao động cá biệt, trường hợp nào không đáp ứng yêu cầu của quy luật giá trị?',
      options: ['Hao phí lao động cá biệt lớn hơn hao phí lao động xã hội cần thiết', 'Hao phí lao động cá biệt nhỏ hơn hao phí lao động xã hội cần thiết', 'Hao phí lao động cá biệt bằng đúng hao phí lao động xã hội cần thiết', 'Tất cả các trường hợp trên đều đáp ứng hoàn hảo quy luật'],
      answer: 0
    },
    {
      q: 'Giá trị sử dụng của hàng hóa sức lao động được coi là chìa khóa để giải quyết mâu thuẫn nào?',
      options: ['Mâu thuẫn trong công thức chung của tư bản (tiền tăng thêm mà không vi phạm quy luật ngang giá)', 'Mâu thuẫn giai cấp giữa nông dân và địa chủ phong kiến cũ', 'Mâu thuẫn cạnh tranh giữa các nhà tư bản độc quyền tư nhân', 'Mâu thuẫn giữa cung và cầu hàng hóa tiêu dùng trên thị trường'],
      answer: 0
    },
    {
      q: 'Phân công lao động xã hội được xác định là nguyên nhân hình thành của hình thái nào?',
      options: ['Nền sản xuất hàng hóa và trao đổi giao thương', 'Chế độ tư hữu tư nhân về tư liệu sản xuất xã hội', 'Sự phân chia giai cấp thống trị và bị trị trong lịch sử', 'Sự xuất hiện bộ máy nhà nước quản lý hành chính'],
      answer: 0
    },
    {
      q: 'Giá trị xã hội của hàng hoá công nghiệp và nông nghiệp giống nhau ở chỗ dựa trên yếu tố nào?',
      options: ['Hao phí lao động xã hội cần thiết trung bình để sản xuất ra hàng hóa đó', 'Mức chi phí mua sắm nguyên vật liệu máy móc công cụ thô', 'Sở thích tiêu dùng chủ quan ngẫu nhiên của người dân đô thị', 'Thời tiết khí hậu tự nhiên ảnh hưởng quy trình sản xuất'],
      answer: 0
    },
    {
      q: 'Trên giác độ KTCT, chi phí sản xuất tư bản được quan điểm là bao gồm những bộ phận nào?',
      options: ['Tư bản bất biến (c) và tư bản khả biến (v); ký hiệu k = c + v', 'Lao động quá khứ (c) và lao động sống thặng dư (v + m)', 'Tiền mua máy móc thiết bị nhà xưởng bến bãi kho tàng', 'Toàn bộ chi phí thực tế xã hội bỏ ra c + v + m'],
      answer: 0
    },
    {
      q: 'Trong quan hệ với cường độ lao động, lượng giá trị của đơn vị hàng hoá biến đổi thế nào?',
      options: ['Không thay đổi khi cường độ lao động tăng hay giảm', 'Tỷ lệ thuận trực tiếp với cường độ lao động xã hội', 'Tỷ lệ nghịch hoàn toàn với cường độ lao động tăng lên', 'Biến động hỗn loạn tùy thuộc vào quan hệ cung cầu thị trường'],
      answer: 0
    },
    {
      q: 'Quan hệ cung cầu thuộc khâu nào của quá trình tái sản xuất xã hội?',
      options: ['Khâu trao đổi / lưu thông hàng hóa thị trường', 'Khâu sản xuất trực tiếp tại các nhà xưởng xí nghiệp', 'Khâu phân phối thu nhập thành quả lao động xã hội', 'Khâu tiêu dùng cuối cùng tiêu hủy giá trị sử dụng'],
      answer: 0
    },
    {
      q: 'Khi nào tiền tệ ra đời? (Kiểu hỏi 2)',
      options: ['Khi vật ngang giá chung được cố định độc quyền lâu dài ở vàng hoặc bạc', 'Khi sản xuất hàng hóa giản đơn mới bắt đầu xuất hiện sơ khai', 'Khi xuất hiện mâu thuẫn giữa lao động giản đơn và phức tạp', 'Khi nhà nước ban hành luật in tiền giấy lưu hành bắt buộc'],
      answer: 0
    },
    {
      q: 'Chọn định nghĩa chính xác về tư bản.',
      options: ['Giá trị mang lại giá trị thặng dư bằng cách bóc lột lao động làm thuê', 'Toàn bộ khối lượng tiền mặt cực lớn tích lũy trong xã hội', 'Hệ thống máy móc trang thiết bị công nghệ kỹ thuật tiên tiến', 'Tài sản nhà đất quyền sở hữu hợp pháp của một cá nhân'],
      answer: 0
    },
    {
      q: 'Vì sao hàng hóa có hai thuộc tính là giá trị và giá trị sử dụng?',
      options: ['Vì lao động sản xuất hàng hóa mang tính hai mặt: lao động cụ thể và lao động trừu tượng', 'Vì mục đích tiêu dùng cá nhân của người làm ra sản phẩm đa dạng', 'Vì có sự quản lý can thiệp vĩ mô áp đặt điều tiết từ nhà nước', 'Vì hàng hóa luôn luôn khan hiếm vật lý trên thị trường tự do'],
      answer: 0
    },
    {
      q: 'Căn cứ vào đâu để phân chia tư bản cố định và tư bản lưu động? (Kiểu hỏi 2)',
      options: ['Đặc điểm phương thức dịch chuyển giá trị của tư bản vào sản phẩm mới', 'Vai trò của bộ phận tư bản trong việc tạo ra giá trị thặng dư', 'Mức độ tiêu hao vật chất hao mòn hữu hình của công cụ máy móc', 'Thời gian hoàn vốn đầu tư dự án xí nghiệp dài hay ngắn'],
      answer: 0
    },
    {
      q: 'Ai là người đầu tiên đưa ra khái niệm "kinh tế- chính trị"?',
      options: ['Antoine de Montchrestien (năm 1615)', 'Adam Smith (năm 1776)', 'William Petty thời cổ điển Anh', 'Francois Quesnay trường phái trọng nông Pháp'],
      answer: 0
    },

    {
      q: 'Thế nào là sản xuất tự cung, tự cấp?',
      options: ['Kiểu tổ chức kinh tế sản phẩm làm ra để thỏa mãn nhu cầu tiêu dùng của chính nội bộ người sản xuất', 'Sản phẩm làm ra mang bán đổi lấy hàng hóa khác thị trường', 'Sản xuất nông sản thô quy mô lớn phục vụ xuất khẩu ngoại tệ', 'Sản xuất phân phối hàng hóa theo định mức kế hoạch nhà nước'],
      answer: 0
    },
    {
      q: 'Thế nào là lao động phức tạp?',
      options: ['Lao động đòi hỏi phải được đào tạo, huấn luyện chuyên môn kỹ năng kỹ xảo trước khi làm', 'Lao động tiêu tốn nhiều sức lực cơ bắp nặng nhọc cực khổ nhất', 'Lao động quản lý điều hành vĩ mô của cơ quan bộ máy chính phủ', 'Lao động vận hành hệ thống máy móc tự động hóa thông minh robot'],
      answer: 0
    },
    {
      q: 'Khi lạm phát phi mã xảy ra, hình thức sử dụng tiền nào có lợi nhất? (Kiểu hỏi 2)',
      options: ['Chuyển ngay tiền mặt sang mua hàng hóa thực tế hoặc tích trữ vàng', 'Gửi tiết kiệm lấy lãi suất định kỳ tại các ngân hàng thương mại', 'Giữ nguyên tiền mặt trong két sắt cá nhân phòng ngừa rủi ro', 'Đầu tư mua trái phiếu chính phủ dài hạn lấy lãi cố định'],
      answer: 0
    },
    {
      q: 'Điều kiện để tiền biến thành tư bản là gì?',
      options: ['Sức lao động của con người phải trở thành hàng hóa một cách phổ biến thị trường', 'Tiền phải được đúc bằng vàng nguyên chất có giá trị tự thân lớn', 'Tiền được mang đi cho vay lấy lãi suất ngân hàng thương mại', 'Tiền đạt khối lượng vô cùng lớn trong tay một cá nhân tài phiệt'],
      answer: 0
    },
    {
      q: 'Quy luật kinh tế cơ bản của chủ nghĩa tư bản là quy luật nào?',
      options: ['Quy luật giá trị thặng dư (sản xuất ra m tối đa bằng bóc lột)', 'Quy luật giá trị điều tiết sản xuất lưu thông hàng hóa', 'Quy luật cạnh tranh tự do đào thải xí nghiệp yếu kém', 'Quy luật lợi nhuận bình quân phân phối giá trị thặng dư'],
      answer: 0
    },
    {
      q: 'Cặp phạm trù nào là phát hiện riêng của C.Mác?',
      options: ['Lao động cụ thể và lao động trừu tượng (tính hai mặt của lao động)', 'Giá trị trao đổi và giá cả thị trường hàng hóa tiền tệ', 'Tư bản cố định và tư bản lưu động chu chuyển sản xuất', 'Địa tô chênh lệch I và địa tô chênh lệch II nông nghiệp'],
      answer: 0
    },
    {
      q: 'Học thuyết kinh tế nào của C.Mác được coi là hòn đá tảng?',
      options: ['Học thuyết giá trị thặng dư', 'Học thuyết giá trị lao động tính hai mặt', 'Học thuyết tích lũy tư bản bần cùng hóa', 'Học thuyết tái sản xuất tư bản xã hội khu vực I và II'],
      answer: 0
    },
    {
      q: 'Lượng giá trị của hàng hóa là yếu tố cố định hay thay đổi?',
      options: ['Thay đổi, phụ thuộc trực tiếp vào năng suất lao động xã hội cần thiết', 'Cố định bất biến từ khi sản xuất ra đến khi tiêu dùng xong', 'Thay đổi hoàn toàn ngẫu nhiên theo ý muốn chủ quan người bán', 'Chỉ thay đổi khi nhà nước ban hành nghị định điều chỉnh giá'],
      answer: 0
    },
    {
      q: 'Về bản chất lợi nhuận và giá trị thặng dư đều là cái gì?',
      options: ['Lao động không công của công nhân làm thuê tạo ra bị nhà tư bản chiếm đoạt', 'Phần thưởng cho sự gánh chịu rủi ro đổi mới của chủ doanh nghiệp', 'Giá trị tăng thêm do máy móc tự động hóa thông minh tự sinh lợi', 'Khoản tiền chênh lệch mua rẻ bán đắt trong khâu lưu thông hàng hóa'],
      answer: 0
    },
    {
      q: 'Điểm giống nhau giữa tăng năng suất lao động và tăng cường độ lao động là gì?',
      options: ['Đều làm tăng tổng số lượng sản phẩm làm ra trong một đơn vị thời gian', 'Đều làm giảm lượng giá trị chứa đựng trong một đơn vị sản phẩm cá biệt', 'Đều làm tăng lượng tiêu hao xương máu cơ bắp sức lao động sống', 'Đều giữ nguyên lượng giá trị tổng sản phẩm xã hội làm ra'],
      answer: 0
    },
    {
      q: 'Dựa vào căn cứ nào để chia tư bản thành tư bản bất biến và tư bản khả biến (c & v)?',
      options: ['Vai trò khác nhau của chúng trong việc tạo ra giá trị thặng dư tăng thêm', 'Phương thức chuyển dịch giá trị từng phần hay toàn bộ vào sản phẩm mới', 'Hình thái tồn tại vật chất bằng máy móc hay bằng sức người sống', 'Tốc độ vận động chu chuyển nhanh hay chậm trong chu kỳ kinh doanh'],
      answer: 0
    },
    {
      q: 'Tư bản bất biến là bộ phận có đặc điểm như thế nào sau quá trình sản xuất?',
      options: ['Giá trị được bảo tồn và chuyển nguyên vẹn vào sản phẩm mới, không tăng lên về lượng', 'Biến đổi về mặt lượng tăng thêm giá trị thặng dư cho nhà tư bản', 'Bị tiêu hao mất đi hoàn toàn không để lại dấu vết giá trị nào', 'Chỉ chuyển dịch một phần nhỏ giá trị cố định cố định dài hạn'],
      answer: 0
    },
    {
      q: 'Giá trị thặng dư là phần lao động như thế nào của công nhân?',
      options: ['Phần lao động dôi ra ngoài thời gian lao động tất yếu, tạo ra m bị tư bản chiếm giữ', 'Toàn bộ thời gian làm việc trong ngày được trả công sòng phẳng', 'Phần lao động thô sơ cơ bắp chưa qua bất kỳ đào tạo kỹ năng nào', 'Lao động quản lý giám sát quy trình nhà xưởng xí nghiệp'],
      answer: 0
    },
    {
      q: 'Giá trị sử dụng của hàng hóa là khái niệm dùng để chỉ điều gì?',
      options: ['Công dụng của vật phẩm có thể thỏa mãn một nhu cầu nào đó của con người', 'Khả năng trao đổi ngang giá với hàng hóa khác trên thị trường', 'Hao phí lao động trừu tượng của người sản xuất kết tinh trong sản phẩm', 'Mức độ khan hiếm vật lý đắt đỏ của mặt hàng tiêu dùng'],
      answer: 0
    },
    {
      q: 'Giá trị sử dụng của hàng hóa sức lao động khi sử dụng sẽ tạo ra giá trị mới như thế nào?',
      options: ['Tạo ra giá trị mới lớn hơn giá trị của bản thân sức lao động (nguồn gốc sinh m)', 'Giữ nguyên vẹn lượng giá trị trao đổi ban đầu không tăng không giảm', 'Làm hao mòn tiêu hủy hoàn toàn giá trị cũ của máy móc thiết bị', 'Chỉ bù đắp lại đúng phần tiền lương nhà tư bản đã ứng trước trả công'],
      answer: 0
    },
    {
      q: 'Nguồn gốc của giá trị hàng hóa được tạo ra từ khâu nào?',
      options: ['Khâu sản xuất trực tiếp (do lao động của con người kết tinh)', 'Khâu lưu thông trao đổi mua bán hàng hóa trên thị trường', 'Khâu phân phối thu nhập tài sản ngân sách của nhà nước', 'Khâu tiêu dùng cuối cùng sử dụng công năng sản phẩm'],
      answer: 0
    },
    {
      q: 'Trong các yếu tố sau đây, yếu tố nào được xác định là thực thể giá trị của hàng hóa?',
      options: ['Lao động trừu tượng của người sản xuất hàng hóa kết tinh bên trong', 'Công dụng ích lợi thực tế giá trị sử dụng của vật phẩm', 'Mức độ quý hiếm đắt đỏ và tính thẩm mỹ hình thức bên ngoài', 'Sự thừa nhận chủ quan chấp nhận mua của người tiêu dùng thị trường'],
      answer: 0
    },
    {
      q: 'Hao mòn hữu hình là loại hao mòn như thế nào?',
      options: ['Hao mòn về vật chất, giá trị sử dụng do quá trình sử dụng hoặc tác động tự nhiên', 'Hao mòn thuần túy về giá trị do tiến bộ công nghệ làm máy móc mất giá', 'Sự lỗi thời lỗi mốt hình thức bên ngoài của sản phẩm tiêu dùng', 'Việc mất trộm hư hỏng hoàn toàn tài sản xí nghiệp nhà tư bản'],
      answer: 0
    },
    {
      q: 'Trong thời đại ngày nay, lực lượng sản xuất bao gồm các yếu tố nào?',
      options: ['Người lao động và tư liệu sản xuất (trong đó khoa học công nghệ là lực lượng sản xuất trực tiếp)', 'Chỉ bao gồm công nhân trực tiếp đứng máy nhà xưởng thủ công', 'Hệ thống luật pháp kinh tế và chính sách quản lý vĩ mô chính phủ', 'Nguồn vốn tài chính tiền tệ gửi tại các tài khoản ngân hàng tư bản'],
      answer: 0
    },
    {
      q: 'Về lượng tỷ suất lợi nhuận (p\') có đặc điểm như thế nào so với m\'? (Kiểu hỏi 2)',
      options: ['Luôn luôn nhỏ hơn tỷ suất giá trị thặng dư (p\' < m\') vì k > v', 'Luôn luôn lớn hơn tỷ suất giá trị thặng dư tuyệt đối', 'Bằng đúng về mặt lượng với tỷ suất giá trị thặng dư xí nghiệp', 'Biến động độc lập tự phát không phụ thuộc cấu tạo tư bản'],
      answer: 0
    },
    {
      q: 'Quy luật căn bản của sản xuất và lưu thông hàng hóa là quy luật nào?',
      options: ['Quy luật giá trị (yêu cầu sản xuất trao đổi dựa trên hao phí LĐ xã hội cần thiết)', 'Quy luật cạnh tranh tự do đào thải doanh nghiệp yếu kém thị trường', 'Quy luật lưu thông tiền tệ in tiền giấy theo lượng hàng hóa tương ứng', 'Quy luật giá trị thặng dư bóc lột công nhân tạo m tối đa tư bản'],
      answer: 0
    },
    {
      q: 'Tư liệu lao động gồm có những bộ phận nào?',
      options: ['Công cụ lao động, hệ thống bình chứa, kết cấu hạ tầng sản xuất', 'Đối tượng lao động thô và đất đai canh tác tự nhiên', 'Sức lực thể lực trí lực của người công nhân sống đứng máy', 'Nhà xưởng nhà xưởng và toàn bộ nguyên nhiên vật liệu đầu vào'],
      answer: 0
    },
    {
      q: 'Theo kinh tế - chính trị Mác - Lênin, loại tiền nào có chức năng cất trữ?',
      options: ['Tiền vàng, bạc đúc thỏi nguyên chất hoặc các vật phẩm quý hiếm có giá trị tự thân', 'Tiền giấy nội tệ phát hành của ngân hàng trung ương lưu hành', 'Tiền dấu hiệu tiền tệ điện tử số hóa trên tài khoản trực tuyến', 'Trái phiếu chính phủ và cổ phiếu doanh nghiệp niêm yết ngắn hạn'],
      answer: 0
    },
    {
      q: 'Giá trị sử dụng của hàng hóa phản ánh tính chất nào?',
      options: ['Tính chất tự nhiên vốn có của vật thể vật chất sản phẩm', 'Tính chất xã hội mang tính lịch sử thay đổi theo giai đoạn', 'Quan hệ sản xuất bóc lột giữa tư sản và vô sản làm thuê', 'Sự điều tiết vĩ mô áp đặt ý chí chủ quan từ phía nhà nước'],
      answer: 0
    },
    {
      q: 'Quá trình sản xuất tư bản là quá trình sản xuất ra cái gì?',
      options: ['Sự thống nhất giữa sản xuất giá trị sử dụng và sản xuất giá trị thặng dư (m)', 'Sản xuất ra hàng hóa tiêu dùng miễn phí phục vụ từ thiện xã hội', 'Quy trình lắp ráp chế tạo máy móc công nghệ công nghiệp nặng thô', 'Sản xuất sản phẩm tự cung tự cấp tiêu dùng nội bộ xí nghiệp tư bản'],
      answer: 0
    },
    {
      q: 'Trong kinh tế hàng hóa, lạm phát là hiện tượng kinh tế mang tính chất gì?',
      options: ['Tiền giấy phát hành vượt quá lượng tiền cần thiết lưu thông gây mất giá, tăng giá cả', 'Sự khan hiếm vật lý trầm trọng của tất cả các mặt hàng nhu yếu phẩm', 'Chính sách giảm thuế kích cầu sản xuất hàng loạt của chính phủ vĩ mô', 'Hiện tượng kinh tế lành mạnh thúc đẩy tăng trưởng sản xuất nhanh chóng'],
      answer: 0
    },
    {
      q: 'Cơ sở chung của quan hệ trao đổi giữa các hàng hóa là gì?',
      options: ['Hao phí lao động trừu tượng của người sản xuất kết tinh bên trong (giá trị)', 'Công dụng giá trị sử dụng hoàn toàn giống hệt nhau về công năng sản phẩm', 'Sự ưa thích thị hiếu chủ quan trùng khớp ngẫu nhiên của hai bên mua bán', 'Mức giá cả ấn định sẵn bắt buộc áp đặt của cơ quan quản lý nhà nước'],
      answer: 0
    },
    {
      q: 'Chi phí sản xuất tư bản tính bằng công thức nào sau đây?',
      options: ['k = c + v (Tư bản bất biến + Tư bản khả biến)', 'W = c + v + m (Giá trị hàng hóa gốc)', 'k = c + v + m (Toàn bộ chi phí thực tế xã hội)', 'p = W - k (Lợi nhuận xí nghiệp thu về)'],
      answer: 0
    },
    {
      q: 'Trong các yếu tố sau đây, yếu tố nào là nguồn gốc của giá trị hàng hóa?',
      options: ['Lao động sống trừu tượng của con người trong quá trình sản xuất kết tinh', 'Yếu tố đất đai tài nguyên thiên nhiên tự nhiên ban tặng sẵn có', 'Hệ thống máy móc trang thiết bị tự động hóa công nghệ nhà xưởng', 'Hoạt động mua bán trao đổi chênh lệch giá ngoài lưu thông thị trường'],
      answer: 0
    },
    {
      q: 'Tích lũy tư bản xét về bản chất là gì?',
      options: ['Quá trình tư bản hóa giá trị thặng dư (biến m thành tư bản phụ thêm mở rộng sản xuất)', 'Gom góp thật nhiều tiền mặt nội tệ cất giấu kỹ trong két sắt nhà tư sản', 'Mua sắm thật nhiều đất đai biệt thự xe sang phục vụ tiêu dùng cá nhân', 'Sáp nhập các công ty nhỏ lẻ cạnh tranh lại thành tập đoàn lớn độc quyền'],
      answer: 0
    },
    {
      q: 'Trong sản xuất hàng hóa tồn tại song song bao nhiêu mặt?',
      options: ['2 mặt (Lao động tư nhân và lao động xã hội / Lao động cụ thể và trừu tượng)', '3 mặt nội dung cấu thành độc lập', '1 mặt duy nhất mang tính kỹ thuật sản xuất', '4 mặt quy trình biệt lập hành chính'],
      answer: 0
    },
    {
      q: 'Mục đích của sản xuất hàng hóa là thỏa mãn nhu cầu của ai?',
      options: ['Thỏa mãn nhu cầu của người mua, của xã hội thông qua trao đổi mua bán thị trường', 'Thỏa mãn nhu cầu tiêu dùng trực tiếp của bản thân gia đình người sản xuất', 'Thỏa mãn mục tiêu tích trữ kho tàng của cơ quan bộ máy nhà nước vĩ mô', 'Thỏa mãn sở thích làm từ thiện phát miễn phí sản phẩm ra cộng đồng'],
      answer: 0
    },
    
    {
      q: 'Chủ nghĩa tư bản ra đời phải có mấy nguyên nhân cơ bản?',
      options: ['2 nguyên nhân cơ bản (có lượng tiền lớn tập trung; có lớp người tự do mất TLSX bán sức)', '3 nguyên nhân thúc đẩy tự phát', '4 nguyên nhân cấu thành lịch sử', '5 nguyên nhân chính trị xã hội kết hợp'],
      answer: 0
    },
    {
      q: 'Vai trò của các bộ phận tư bản trong chu chuyển tư bản được xác định trong phạm trù nào sau đây?',
      options: ['Tư bản cố định và tư bản lưu động xét theo cách dịch chuyển giá trị', 'Tư bản bất biến và tư bản khả biến xét theo vai trò tạo ra m', 'Tư bản tiền tệ và tư bản hàng hóa xét theo hình thái vận động lưu thông', 'Tư bản độc quyền nhà nước can thiệp điều tiết vĩ mô kinh tế'],
      answer: 0
    },
    {
      q: 'Lao động trừu tượng tạo ra cái gì?',
      options: ['Giá trị của hàng hóa kết tinh bên trong sản phẩm', 'Hình thái vật chất cụ thể công dụng giá trị sử dụng hàng hóa', 'Máy móc thiết bị công cụ lao động thô dùng sản xuất', 'Nhu cầu thị hiếu chủ quan của người mua trên thị trường tự do'],
      answer: 0
    },
    {
      q: 'Ai là người đầu tiên phát minh ra tính hai mặt của lao động sản xuất hàng hóa?',
      options: ['Karl Marx (Các Mác)', 'Adam Smith thời cổ điển Anh', 'David Ricardo nhà kinh tế học', 'V.I. Lênin thời độc quyền nhà nước'],
      answer: 0
    },
    {
      q: 'Theo quan điểm của KTCT Mác- Lênin, khủng hoảng kinh tế của chủ nghĩa tư bản mang tính chất gì?',
      options: ['Khủng hoảng sản xuất "thừa" chu kỳ mang tính hệ thống bản chất TBCN', 'Khủng hoảng thiếu hụt lương thực thực phẩm do thiên tai mất mùa tự nhiên', 'Khủng hoảng tài chính ngắn hạn do sai lầm kỹ thuật in tiền ngân hàng', 'Khủng hoảng cục bộ đơn lẻ tại một ngành dịch vụ không ảnh hưởng chung'],
      answer: 0
    },
    {
      q: 'Sản xuất hàng hóa có vai trò gì trong phân công lao động xã hội?',
      options: ['Thúc đẩy chuyên môn hóa, phát triển phân công lao động xã hội sâu sắc hơn', 'Làm triệt tiêu và hạn chế sự mở rộng phân công lao động giữa các vùng', 'Bắt buộc cào bằng mọi ngành nghề có quy mô lao động như nhau hành chính', 'Xóa bỏ hoàn toàn sự phân biệt giữa lao động công nghiệp và nông nghiệp'],
      answer: 0
    },
    {
      q: 'Lượng giá trị hàng hóa nhiều hay ít, cao hay thấp, được xác định như thế nào?',
      options: ['Đo bằng thời gian lao động xã hội cần thiết trung bình để sản xuất ra mặt hàng đó', 'Đo bằng thời gian lao động cá biệt của người thợ thủ công lạc hậu nhất', 'Căn cứ vào số lượng tiền mặt nhà tư bản bỏ ra chi trả mua nguyên vật liệu', 'Quy định áp đặt cứng nhắc từ phía cơ quan quản lý vĩ mô của nhà nước'],
      answer: 0
    },
    {
      q: 'Xét về thời gian, kinh tế hàng hóa ra đời sau nền kinh tế nào?',
      options: ['Nền kinh tế tự nhiên, tự cung tự cấp sơ khai', 'Nền kinh tế thị trường định hướng xã hội chủ nghĩa hiện đại', 'Nền kinh tế chỉ huy kế hoạch hóa tập trung mệnh lệnh quan liêu', 'Nền kinh tế tri thức số hóa toàn cầu thế kỷ XXI'],
      answer: 0
    },
    {
      q: 'Mâu thuẫn chung trong công thức chung của tư bản là gì?',
      options: ['Tư bản không thể xuất hiện từ lưu thông, cũng không thể xuất hiện ở ngoài lưu thông; nó phải xuất hiện trong lưu thông và đồng thời không phải trong lưu thông', 'Mâu thuẫn giữa người bán muốn đắt và người mua muốn rẻ ngoài chợ', 'Sự thiếu hụt tiền mặt nghiêm trọng của ngân hàng thương mại chu kỳ', 'Sự xung đột vũ trang giành giật thị trường thuộc địa giữa các đế quốc'],
      answer: 0
    },

    {
      q: 'Trong kinh tế chính trị Mác-Lênin, cung là phạm trù kinh tế dùng để chỉ cái gì?',
      options: ['Toàn bộ khối lượng hàng hóa, dịch vụ sẵn sàng đưa ra thị trường bán ở mức giá nhất định', 'Nhu cầu có khả năng thanh toán bằng tiền mặt của người mua ngoài chợ', 'Sở thích tiêu dùng chủ quan ngẫu nhiên của các hộ gia đình tư nhân', 'Quy định kế hoạch sản xuất giao chỉ tiêu từ phía bộ máy cơ quan nhà nước'],
      answer: 0
    },
    {
      q: 'Các nhân tố ảnh hưởng tới lượng giá trị hàng hóa bao gồm những gì?',
      options: ['Năng suất lao động xã hội, mức độ phức tạp của lao động tạo ra sản phẩm', 'Cường độ lao động sống, thời gian làm việc trong ngày của công nhân làm thuê', 'Mức giá cả đắt đỏ quy định sẵn của các tập đoàn độc quyền tư nhân', 'Sự biến động tự phát của quan hệ cung cầu hàng hóa ngoài lưu thông thị trường'],
      answer: 0
    },
    {
      q: 'Tích tụ và tập trung tư bản giống nhau ở điểm nào?',
      options: ['Đều làm tăng quy mô tư bản cá biệt lớn mạnh hơn ban đầu', 'Đều làm tăng lập tức tổng quy mô tư bản toàn xã hội đồng thời', 'Đều dựa trực tiếp vào việc gộp các xí nghiệp nhỏ lẻ có sẵn lại làm một', 'Đều xuất phát trực tiếp từ nguồn giá trị thặng dư tích lũy giữ lại'],
      answer: 0
    },
    {
      q: 'Giá trị thặng dư siêu ngạch là hình thức biến tướng của loại giá trị thặng dư nào?',
      options: ['Giá trị thặng dư tương đối (vì đều dựa trên tăng năng suất lao động rút ngắn thời gian tất yếu)', 'Giá trị thặng dư tuyệt đối kéo dài giờ làm ngày lao động', 'Lợi nhuận bình quân phân phối giữa các ngành sản xuất kinh doanh', 'Lợi nhuận độc quyền cao áp đặt mua bán của tài phiệt tư sản'],
      answer: 0
    },
    {
      q: 'Phương thức sản xuất tư bản chủ nghĩa hình thành và thay thế cho phương thức sản xuất nào?',
      options: ['Phương thức sản xuất phong kiến cũ lạc hậu lỗi thời', 'Phương thức sản xuất chiếm hữu nô lệ cổ đại xa xưa', 'Phương thức sản xuất cộng sản nguyên thủy sơ khai', 'Phương thức sản xuất xã hội chủ nghĩa văn minh hiện đại'],
      answer: 0
    },
    {
      q: 'Điểm giống nhau giữa địa tô tuyệt đối và địa tô chênh lệch đó là gì? (Kiểu hỏi 2)',
      options: ['Đều là phần giá trị thặng dư do công nhân nông nghiệp tạo ra bị địa chủ chiếm đoạt quyền tư hữu', 'Đều thu được trên mọi loại đất đai canh tác nông nghiệp bất kể tốt xấu vị trí', 'Đều phụ thuộc trực tiếp vào việc thâm canh tăng vốn đầu tư thêm máy móc', 'Đều có mức tỷ suất sinh lời bằng đúng với lợi nhuận bình quân công nghiệp'],
      answer: 0
    },
    {
      q: 'Tổ chức Hợp tác và Phát triển kinh tế gọi tắt là gì?',
      options: ['OECD', 'WTO', 'APEC', 'ASEAN'],
      answer: 0
    },
    {
      q: 'Vai trò của các bộ phận tư bản trong tích lũy tư bản được xác định bằng phạm trù nào?',
      options: ['Cấu tạo hữu cơ của tư bản (c/v) phản ánh trình độ kỹ thuật máy móc sống', 'Tư bản cố định và tư bản lưu động dịch chuyển giá trị sản phẩm mới', 'Tư bản tiền tệ và tư bản sản xuất hình thái lưu thông vận động', 'Tư bản độc quyền nhà nước liên minh can thiệp vĩ mô kinh tế'],
      answer: 0
    },
    {
      q: 'm\'- Tỷ suất giá trị thặng dư là tỷ lệ phần trăm giữa các đại lượng nào?',
      options: ['Giá trị thặng dư (m) và tư bản khả biến (v); ký hiệu m\' = m/v x 100%', 'Giá trị thặng dư (m) và tổng tư bản ứng trước (c + v) lúc đầu', 'Lợi nhuận thu về (p) và giá cả bán ra của sản phẩm thị trường', 'Tư bản bất biến (c) và tư bản khả biến (v) hữu cơ sản xuất'],
      answer: 0
    },
    {
      q: 'Yếu tố quyết định đến giá cả hàng hoá là gì? (Kiểu hỏi 2)',
      options: ['Giá trị của hàng hóa (lao động xã hội cần thiết kết tinh bên trong)', 'Quan hệ cung cầu biến động tự phát của mặt hàng ngoài chợ', 'Sức mua của đồng tiền dấu hiệu giá trị phát hành lưu thông', 'Yếu tố cạnh tranh cá biệt giữa các nhà sản xuất xí nghiệp'],
      answer: 0
    },
    {
      q: 'Chức năng nào của kinh tế chính trị Mác - Lênin thể hiện sự vận dụng đúng các quy luật kinh tế khách quan thông qua điều chỉnh hành vi cá nhân hoặc các chính sách kinh tế sẽ góp phần thúc đẩy kinh tế - xã hội phát triển theo hướng tiến bộ?',
      options: ['Chức năng thực tiễn cuộc sống vận dụng điều chỉnh thúc đẩy', 'Chức năng nhận thức quy luật khách quan khoa học sâu sắc', 'Chức năng tư tưởng xây dựng thế giới quan cách mạng kiên định', 'Chức năng phương pháp luận làm nền tảng cho các khoa học cụ thể'],
      answer: 0
    },
    {
      q: 'Tư bản cố định và tư bản lưu động thuộc phạm trù tư bản nào?',
      options: ['Tư bản sản xuất xét theo phương thức dịch chuyển giá trị sản phẩm mới', 'Tư bản ứng trước xét theo vai trò tạo ra giá trị thặng dư m', 'Tư bản lưu thông tồn tại dưới hình thái tiền tệ hàng hóa chợ', 'Tư bản độc quyền nhà nước can thiệp điều tiết vĩ mô nền kinh tế'],
      answer: 0
    },
    {
      q: 'Về mặt lượng giữa p\' và m\' thì mối quan hệ thế nào?',
      options: ['Tỷ suất lợi nhuận (p\') luôn luôn nhỏ hơn tỷ suất giá trị thặng dư (m\') về lượng', 'Tỷ suất lợi nhuận luôn luôn lớn hơn tỷ suất giá trị thặng dư tuyệt đối', 'Hai tỷ suất luôn bằng nhau về lượng trong mọi xí nghiệp độc quyền', 'Không có mối quan hệ lượng mang tính quy luật nào liên quan'],
      answer: 0
    },
    {
      q: 'Lĩnh vực nghiên cứu trọng tâm của chủ nghĩa trọng thương là gì?',
      options: ['Lĩnh vực lưu thông (thương nghiệp, ngoại thương, tích lũy tiền vàng)', 'Lĩnh vực sản xuất nông nghiệp thô tự nhiên nông thôn', 'Quy trình sản xuất công nghiệp nặng nhà xưởng máy móc đại cơ khí', 'Quan hệ phân phối thu nhập giữa các giai cấp xã hội tư sản'],
      answer: 0
    },

    {
      q: 'Kinh tế hàng hóa là sự tiếp nối của nền kinh tế nào?',
      options: ['Nền kinh tế tự nhiên, tự cung tự cấp sơ khai lỗi thời', 'Nền kinh tế chỉ huy kế hoạch hóa tập trung bao cấp mệnh lệnh', 'Nền kinh tế thị trường định hướng xã hội chủ nghĩa hiện đại nước ta', 'Nền kinh tế tri thức số hóa internet vạn vật thế kỷ XXI toàn cầu'],
      answer: 0
    },
    {
      q: 'Tiền tệ là bánh xe vĩ đại của lưu thông. Câu nói này là của ai và câu nói đó đúng hay sai?',
      options: ['Adam Smith và câu nói này hoàn toàn chính xác khoa học', 'Các Mác và câu nói này mang tính thần bí hóa tiền tệ', 'David Ricardo và câu nói này sai lầm tầm thường tư sản', 'William Petty và câu nói này chưa hoàn chỉnh đầy đủ ý'],
      answer: 0
    },
    {
      q: 'Sự khác nhau giữa địa tô tuyệt đối và địa tô chênh lệch về mặt nguyên nhân sinh ra là gì?',
      options: ['Địa tô tuyệt đối do độc quyền tư hữu ruộng đất; Địa tô chênh lệch do độc quyền kinh doanh ruộng đất đất tốt vị trí thuận lợi thâm canh', 'Địa tô tuyệt đối do thâm canh; Địa tô chênh lệch do độ màu mỡ tư nhiên đất', 'Địa tô tuyệt đối thu được trên đất tốt; Địa tô chênh lệch thu được trên đất xấu', 'Không có sự khác biệt nào về nguyên nhân bản chất sinh ra địa tô'],
      answer: 0
    },

    {
      q: 'Nguyên nhân của bản chất khủng hoảng kinh tế chủ nghĩa tư bản là gì?',
      options: ['Mâu thuẫn cơ bản giữa tính chất xã hội hóa của lực lượng sản xuất với chế độ chiếm hữu tư nhân tư bản chủ nghĩa về TLSX', 'Sự thiếu hụt tiền mặt và lạm phát phi mã quá mức ngân hàng', 'Do thiên tai dịch bệnh mất mùa tự nhiên sụt giảm năng suất đột ngột', 'Chính sách quản lý điều tiết vĩ mô sai lầm từ phía chính phủ tư sản'],
      answer: 0
    },
    {
      q: 'Khi vàng trở thành vật ngang giá chung để trao đổi hàng hóa thì hình thái nào xuất hiện?',
      options: ['Hình thái tiền tệ hoàn chỉnh', 'Hình thái giản đơn ngẫu nhiên sơ khai', 'Hình thái giá trị mở rộng toàn diện', 'Hình thái vật ngang giá chung sơ bộ'],
      answer: 0
    },
    {
      q: 'Yếu tố nào được điều chỉnh bởi quy luật kinh tế tác động vào các động cơ lợi ích và quan hệ lợi ích của con người?',
      options: ['Chính sách kinh tế chủ quan của nhà nước ban hành vận dụng', 'Hành vi tiêu dùng ngẫu nhiên tự phát thị hiếu của người dân', 'Quy định kỹ thuật quy trình công nghệ vận hành xí nghiệp', 'Lợi nhuận độc quyền cao cá biệt của tài phiệt độc quyền tư nhân'],
      answer: 0
    },

  ],

  hard: [
    {
      q: 'Các luận điểm về bóc lột sản phẩm thặng dư dưới đây, luận điểm nào sai?',
      options: [
        'Bóc lột sản phẩm thặng dư chỉ có duy nhất ở phương thức sản xuất chủ nghĩa tư bản',
        'Các phương thức sản xuất trước chủ nghĩa tư bản bóc lột sản phẩm thặng dư một cách trực tiếp',
        'Sản xuất giá trị thặng dư tuyệt đối là hình thái chung nhất của sản xuất giá trị thặng dư',
        'Giá trị thặng dư siêu ngạch là hình thức biến tướng của giá trị thặng dư tương đối'
      ],
      answer: 0
    },
    {
      q: 'Điền vào chỗ trống để hoàn thành câu sau: "Chính trị kinh tế học tuyệt nhiên không nghiên cứu sự sản xuất, mà nghiên cứu những quan hệ xã hội giữa...trong sản xuất, nghiên cứu chế độ xã hội của sản xuất"',
      options: ['người với người', 'giai cấp với giai cấp', 'chủ và thợ làm thuê', 'nhà nước và doanh nghiệp tư nhân'],
      answer: 0
    },
    {
      q: 'Đâu là công thức cấu thành lượng giá trị một đơn vị hàng hóa (G)? (Hoặc công thức tính giá trị hàng hóa W)',
      options: ['W = c + v + m (Tư bản bất biến + Tư bản khả biến + Giá trị thặng dư)', 'W = c + v (Chi phí sản xuất thực tế tư bản chủ nghĩa k)', 'W = k + p (Chi phí sản xuất xí nghiệp + Lợi nhuận cá biệt)', 'W = c + v + p_bar (Chi phí + Lợi nhuận bình quân giá cả sản xuất)'],
      answer: 0
    },
    {
      q: 'Tuần hoàn của tư bản công nghiệp trải qua mấy giai đoạn và dưới những hình thái nào?',
      options: ['3 giai đoạn vận động (Mua -> Sản xuất -> Bán); tồn tại dưới 3 hình thái (Tư bản tiền tệ -> Tư bản sản xuất -> Tư bản hàng hóa)', '2 giai đoạn lưu thông ngoài thị trường dạng tiền tệ hàng hóa', '4 giai đoạn chu kỳ khép kín phân phối tiêu dùng sản xuất', '3 giai đoạn vay vốn sản xuất thu lợi nhuận cá biệt xí nghiệp'],
      answer: 0
    },
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
      q: 'Để làm rõ vai trò của các bộ phận tư bản trong việc tạo ra giá trị thặng dư, tư bản được chia thành loại nào?',
      options: ['Tư bản bất biến (c) và tư bản khả biến (v)', 'Tư bản cố định và tư bản lưu động chu chuyển', 'Tư bản độc quyền tư nhân và tư bản độc quyền nhà nước', 'Tư bản tiền tệ, tư bản sản xuất và tư bản hàng hóa'],
      answer: 0
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
      q: '[Bài tập tính toán] Cứ 100 công nhân thì tạo ra giá trị mới là 500.000 USD, tư bản khả biến cho mỗi công nhân là 1.000 USD/tháng. Để tạo ra được giá trị mới 1.200.000 USD thì cần lượng công nhân là bao nhiêu, biết rằng tiền lương cho mỗi công nhân không đổi và trình độ bóc lột tăng thêm 100%.',
      options: [
        'Số công nhân là 200 người',
        'Số công nhân là 100 người',
        'Số công nhân là 500 người',
        'Số công nhân là 50 người'
      ],
      answer: 0
    },
    {
      q: '[Bài tập tính toán] Để sản xuất ra 1000 đôi dép, công ty đầu tư 100000 USD cho nguyên liệu, vật liệu, 5000 USD cho hao mòn máy móc. Công ty đó trả 5000 USD cho công nhân, trình độ bóc lột đạt 200%. Tính giá trị (W) của 1000 đôi dép công ty sản xuất ra?',
      options: [
        'W = 120000 USD',
        'W = 110000 USD',
        'W = 115000 USD',
        'W = 100000 USD'
      ],
      answer: 0
    },
    {
      q: '[Phân tích/Suy luận] Nguồn vốn để công nghiệp hóa ở các nước tư bản cổ điển lấy từ đâu? (Hoặc nguồn gốc nào không đúng với nguồn vốn công nghiệp hóa?)',
      options: [
        'Cướp bóc thuộc địa, khai thác lao động làm thuê, làm phá sản người sản xuất nhỏ trong nông nghiệp (Đáp án không đúng: Đi vay nhà nước)',
        'Đi vay ưu đãi viện trợ không hoàn lại từ tổ chức tài chính quốc tế toàn cầu',
        'Nguồn vốn tích lũy tự cấp của các hộ nông dân nghèo tự phát nông thôn',
        'Sự tài trợ trợ cấp từ ngân sách bộ máy nhà nước vô sản xã hội'
      ],
      answer: 0
    },
    {
      q: '[Phân tích/Suy luận] Quan điểm cho rằng lợi nhuận phần thu nhập thặng dư tính bằng hiệu quả giữa giá trị tổng doanh thu trừ đi tổng chi phí và là phần thưởng cho việc gánh chịu rủi ro và cho sự đổi mới là của ai?',
      options: ['Paul A.Samuelson', 'David Begg', 'Stanley Fischer', 'Rudiger Dornbusch'],
      answer: 0
    },
    {
      q: '[Phân tích/Suy luận] Chọn các ý không đúng về mối quan hệ giữa sản phẩm và hàng hoá.',
      options: [
        'Mọi sản phẩm do lao động con người làm ra đều tự động mang bản chất là hàng hóa thị trường',
        'Sản phẩm chỉ biến thành hàng hóa khi mang ra trao đổi mua bán thông qua thị trường',
        'Hàng hóa là một phạm trù lịch sử chỉ tồn tại trong các nền kinh tế hàng hóa thị trường',
        'Sản phẩm là phạm trù vĩnh viễn gắn liền mọi nền sản xuất vật chất của nhân loại'
      ],
      answer: 0
    },
    {
      q: '[Phân tích/Suy luận] Sự khác biệt về mục tiêu giữa kinh tế thị trường định hướng xã hội chủ nghĩa với kinh tế thị trường tư bản chủ nghĩa là gì? (lựa chọn ba đáp án)',
      options: [
        'Phát triển LLSX xây dựng cơ sở vật chất CNXH, thực hiện dân giàu nước mạnh công bằng văn minh, xóa bỏ áp bức bóc lột',
        'Tối đa hóa lợi nhuận siêu ngạch độc quyền cá biệt cho thiểu số giai cấp tư sản thống trị',
        'Duy trì sự bần cùng hóa tuyệt đối của tầng lớp vô sản lao động làm thuê làm thô',
        'Chỉ tập trung phục vụ lợi ích cốt lõi ngắn hạn của nhóm lợi ích tài phiệt ngân hàng'
      ],
      answer: 0
    },
    {
      q: '[Phân tích/Suy luận] Đảng cộng sản Việt Nam là đảng cầm quyền do yếu tố nào sau đây quy định?',
      options: [
        'Bản chất cách mạng khoa học, sự tín nhiệm lựa chọn lịch sử khách quan và đồng thuận của nhân dân',
        'Mệnh lệnh áp đặt chủ quan bằng vũ lực quân sự hành chính cưỡng chế lập pháp',
        'Sự chỉ định can thiệp phân công từ các tổ chức liên minh quốc tế toàn cầu bên ngoài',
        'Quy mô tài chính kinh tế nhà nước độc quyền sở hữu tài sản quốc gia dẫn dắt'
      ],
      answer: 0
    },
    {
      q: '[Phân tích/Suy luận] Thông qua việc giải quyết các quan hệ nào để từ đó giúp cho các chủ thể trong xã hội vận dụng các quy luật kinh tế, tạo động lực để không ngừng sáng tạo, phát triển toàn diện?',
      options: ['Quan hệ lợi ích kinh tế giữa các chủ thể xã hội hài hòa hợp lý', 'Quan hệ kỹ thuật công nghệ máy móc dây chuyền sản xuất tự động', 'Quy định pháp lý hành chính chế tài xử phạt nghiêm khắc cưỡng chế', 'Mối liên hệ ngẫu nhiên tự phát của quan hệ cung cầu ngoài chợ'],
      answer: 0
    },
    {
      q: '[Phân tích/Suy luận] Mục tiêu của kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam là gì? (Chọn hai đáp án)',
      options: [
        'Phát triển lực lượng sản xuất, xây dựng cơ sở vật chất - kỹ thuật của chủ nghĩa xã hội; thực hiện "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh"',
        'Xóa bỏ triệt để ngay lập tức mọi thành phần kinh tế tư nhân nội địa xí nghiệp',
        'Tập trung phát triển độc quyền công nghiệp nặng kiểu bao cấp bao cấp cũ',
        'Lệ thuộc sâu sắc vào chuỗi cung ứng sản xuất của các cường quốc tư bản tư sản'
      ],
      answer: 0
    },
    {
      q: '[Phân tích/Suy luận] Mục tiêu phát triển kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam bao gồm những giá trị nào?',
      options: [
        'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh gắn liền hoàn thiện hệ thống CNXH',
        'Tối đa hóa giá trị thặng dư bóc lột phục vụ thiểu số giai cấp chủ sở hữu tư nhân',
        'Tự cung tự cấp khép kín hoàn toàn hướng nội bài trừ giao lưu quốc tế toàn cầu',
        'Cào bằng thu nhập tuyệt đối không công nhận đóng góp năng lực cá nhân cá biệt'
      ],
      answer: 0
    },
    {
      q: '[Phân tích/Suy luận] Đâu KHÔNG phải là nhân tố ảnh hưởng đến quy quy mô tích luỹ tư bản?',
      options: [
        'Mức độ giảm sút cường độ lao động của người công nhân làm thuê tại nhà xưởng',
        'Trình độ bóc lột giá trị thặng dư (m\') tăng năng suất lao động xã hội',
        'Sự chênh lệch giữa tư bản sử dụng và tư bản tiêu dùng thực tế xí nghiệp',
        'Quy mô khối lượng tư bản ứng trước ban đầu của nhà tư bản tư sản'
      ],
      answer: 0
    },
    {
      q: 'Khối lượng giá trị thặng dư (M) được tính bằng công thức nào?',
      options: ['M = m\' x V hoặc M = t\'/t x V', 'M = c + v + m giá trị toàn bộ', 'M = p\' x (C + V) lợi nhuận', 'M = (m / v) x 100% tỷ suất m\''],
      answer: 0
    },
    {
      q: 'Chi phí sản xuất tư bản xét về lượng luôn luôn có mối quan hệ như thế nào với chi phí sản xuất thực tế?',
      options: ['Chi phí sản xuất tư bản (k = c + v) luôn nhỏ hơn chi phí sản xuất thực tế xã hội (c + v + m)', 'Luôn luôn lớn hơn chi phí sản xuất thực tế xã hội tuyệt đối', 'Bằng đúng về mặt lượng với chi phí sản xuất thực tế xã hội trong mọi trường hợp', 'Không có bất kỳ mối quan hệ mang tính quy luật nào về lượng'],
      answer: 0
    },
    {
      q: 'Hàng hóa sức lao động ra đời phải dựa trên mấy điều kiện?',
      options: ['2 điều kiện (Người lao động tự do thân thể; Người lao động mất hết TLSX phải bán mình)', '3 điều kiện thúc đẩy tự phát', '4 điều kiện cấu thành lịch sử', '1 điều kiện duy nhất là có thị trường làm việc'],
      answer: 0
    },
    {
      q: '"Lao động là cha, còn đất là mẹ của mọi của cải". Khái niệm lao động trong câu nói này là lao động nào?',
      options: ['Lao động cụ thể (tạo ra của cải vật chất giá trị sử dụng cụ thể)', 'Lao động trừu tượng kết tinh tạo ra lượng giá trị bằng tiền', 'Lao động thô chưa qua đào tạo huấn luyện kỹ năng kỹ xảo nào', 'Lao động trí óc chất lượng cao của các chuyên gia công nghệ'],
      answer: 0
    },
    {
      q: 'Sự phát triển các hình thái giá trị bao gồm những hình thái nào theo thứ tự?',
      options: [
        'Hình thái giản đơn -> Mở rộng -> Vật ngang giá chung -> Tiền tệ',
        'Hình thái tiền tệ -> Vật ngang giá chung -> Mở rộng -> Giản đơn',
        'Hình thái mở rộng -> Giản đơn -> Tiền tệ -> Vật ngang giá chung',
        'Hình thái vật ngang giá chung -> Tiền tệ -> Giản đơn -> Mở rộng'
      ],
      answer: 0
    }
  ],
};