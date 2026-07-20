/* ==========================================================================
   Shared service catalogue - used by dich-vu.html (listing) and
   dich-vu-chi-tiet.html (detail template, reads ?slug= from the URL).
   Kept as plain data so both pages render from a single source of truth.
   ========================================================================== */
const SERVICES_DATA = [
  {
    slug: 'dieu-tri-mun',
    title: 'Điều trị mụn chuẩn y khoa',
    shortDesc: 'Làm sạch sâu ổ mụn nhân, kháng viêm tầng sâu kết hợp ánh sáng sinh học giúp phục hồi cấu trúc biểu bì cấp tốc không để lại sẹo thâm.',
    image: 'assets/before_skin.png',
    intro: 'Mụn không chỉ ảnh hưởng thẩm mỹ mà còn tiềm ẩn nguy cơ để lại sẹo thâm, sẹo rỗ nếu xử lý sai cách. Phác đồ trị mụn tại Phòng Khám Da Liễu Bác Sĩ Tân được xây dựng riêng theo từng loại mụn (mụn viêm, mụn bọc, mụn ẩn) kết hợp làm sạch nhân mụn vô trùng, kháng viêm chuyên sâu và ánh sáng sinh học để rút ngắn thời gian phục hồi.',
    benefits: [
      'Làm sạch nhân mụn vô trùng, hạn chế tối đa sẹo thâm',
      'Kháng viêm tầng sâu, giảm sưng đỏ nhanh chóng',
      'Phác đồ cá nhân hóa theo từng loại da và mức độ mụn',
      'Hướng dẫn chăm sóc da tại nhà sau điều trị'
    ],
    suitableFor: [
      'Da đang nổi mụn viêm, mụn bọc, mụn ẩn kéo dài',
      'Da từng điều trị mụn nhiều nơi nhưng chưa dứt điểm',
      'Da nhạy cảm cần phác đồ nhẹ nhàng, an toàn'
    ],
    process: [
      { title: 'Thăm khám & soi da', desc: 'Bác sĩ soi da 3D xác định loại mụn và mức độ viêm nhiễm.' },
      { title: 'Làm sạch nhân mụn', desc: 'Lấy nhân mụn vô trùng bằng dụng cụ y tế dùng một lần.' },
      { title: 'Kháng viêm chuyên sâu', desc: 'Chiếu ánh sáng sinh học kết hợp dưỡng chất phục hồi.' },
      { title: 'Chăm sóc & tái khám', desc: 'Hướng dẫn chăm sóc da tại nhà và lịch tái khám phù hợp.' }
    ]
  },
  {
    slug: 'tre-hoa-da',
    title: 'Trẻ hóa da công nghệ cao',
    shortDesc: 'Tái tạo bề mặt da mịn màng, thúc đẩy tăng sinh sợi collagen giúp thu nhỏ lỗ chân lông hiệu quả bằng công nghệ hiện đại an toàn.',
    image: 'assets/after_skin.png',
    intro: 'Theo thời gian, collagen suy giảm khiến da chảy xệ, lỗ chân lông to và kém đàn hồi. Liệu trình trẻ hóa da công nghệ cao sử dụng năng lượng nhiệt/ánh sáng có kiểm soát để kích thích tăng sinh collagen tự nhiên, giúp bề mặt da săn chắc và mịn màng hơn mà không cần nghỉ dưỡng dài ngày.',
    benefits: [
      'Kích thích tăng sinh collagen, cải thiện độ đàn hồi',
      'Thu nhỏ lỗ chân lông, làm mịn bề mặt da',
      'Không xâm lấn, không cần thời gian nghỉ dưỡng',
      'Hiệu quả duy trì lâu dài khi kết hợp chăm sóc tại nhà'
    ],
    suitableFor: [
      'Da bắt đầu chảy xệ, kém săn chắc theo tuổi tác',
      'Lỗ chân lông to, bề mặt da không đều màu',
      'Người muốn trẻ hóa da dự phòng, chưa cần can thiệp sâu'
    ],
    process: [
      { title: 'Đánh giá tình trạng da', desc: 'Soi da xác định mức độ lão hóa và nhu cầu trẻ hóa.' },
      { title: 'Làm sạch & ủ tê nhẹ', desc: 'Chuẩn bị da sạch, ủ tê nếu cần để tăng cảm giác dễ chịu.' },
      { title: 'Chiếu công nghệ trẻ hóa', desc: 'Tác động năng lượng kiểm soát kích thích collagen.' },
      { title: 'Phục hồi & dưỡng ẩm', desc: 'Đắp mặt nạ phục hồi, hướng dẫn chống nắng sau điều trị.' }
    ]
  },
  {
    slug: 'tri-nam-tan-nhang',
    title: 'Trị nám, tàn nhang Laser',
    shortDesc: 'Ứng dụng bước sóng Laser thế hệ mới phá hủy sắc tố melanin sẫm màu dưới tế bào biểu bì, trả lại nước da trắng hồng rạng rỡ.',
    image: 'assets/treatment_room.png',
    intro: 'Nám và tàn nhang hình thành do rối loạn sắc tố melanin dưới tác động của nội tiết tố, ánh nắng và lão hóa. Công nghệ Laser thế hệ mới nhắm chính xác vào các đốm sắc tố sẫm màu, phá vỡ chúng thành các hạt siêu nhỏ để cơ thể tự đào thải, giúp da đều màu và sáng khỏe hơn qua từng liệu trình.',
    benefits: [
      'Nhắm chính xác vào sắc tố, ít ảnh hưởng vùng da xung quanh',
      'Cải thiện rõ rệt nám mảng, tàn nhang sau vài buổi',
      'Kết hợp phác đồ chống tái phát sau điều trị',
      'An toàn cho hầu hết các loại da khi có chỉ định của bác sĩ'
    ],
    suitableFor: [
      'Nám mảng, nám chân sâu hai bên gò má',
      'Tàn nhang dày đặc, da không đều màu',
      'Da xỉn màu do tăng sắc tố sau viêm'
    ],
    process: [
      { title: 'Soi da xác định loại nám', desc: 'Phân biệt nám bì, nám thượng bì để chọn bước sóng phù hợp.' },
      { title: 'Ủ tê giảm cảm giác khó chịu', desc: 'Thoa kem tê chuyên dụng trước khi chiếu Laser.' },
      { title: 'Chiếu Laser phá sắc tố', desc: 'Bước sóng Laser tác động phá vỡ hạt melanin sẫm màu.' },
      { title: 'Chăm sóc phục hồi da', desc: 'Bôi phục hồi, chống nắng nghiêm ngặt để tránh tái sắc tố.' }
    ]
  },
  {
    slug: 'cham-soc-da',
    title: 'Chăm sóc da chuyên sâu',
    shortDesc: 'Cấp ẩm đa tầng sâu Hyaluronic Acid, đắp nạ bổ sung vitamin nuôi dưỡng hàng rào bảo vệ biểu bì khỏe mạnh trước gốc tự do.',
    image: 'assets/hero_clinic.png',
    intro: 'Hàng rào bảo vệ da suy yếu khiến da dễ khô ráp, kích ứng và xuống cấp nhanh trước tác động của môi trường. Liệu trình chăm sóc da chuyên sâu cấp ẩm đa tầng bằng Hyaluronic Acid phân tử thấp kết hợp vitamin và chống oxy hóa, phục hồi hàng rào bảo vệ da từ bên trong.',
    benefits: [
      'Cấp ẩm sâu, giảm khô căng và bong tróc',
      'Phục hồi hàng rào bảo vệ da tự nhiên',
      'Bổ sung vitamin, chống oxy hóa ngừa lão hóa sớm',
      'Phù hợp chăm sóc định kỳ duy trì làn da khỏe mạnh'
    ],
    suitableFor: [
      'Da khô, thiếu ẩm, dễ bong tróc',
      'Da vừa trải qua liệu trình laser/lăn kim cần phục hồi',
      'Người muốn duy trì làn da khỏe đẹp định kỳ'
    ],
    process: [
      { title: 'Làm sạch sâu', desc: 'Tẩy trang, rửa mặt và tẩy tế bào chết nhẹ nhàng.' },
      { title: 'Xông hơi giãn nở lỗ chân lông', desc: 'Hỗ trợ dưỡng chất thẩm thấu tốt hơn ở bước sau.' },
      { title: 'Cấp ẩm đa tầng', desc: 'Thoa/lăn kim vi điểm đưa Hyaluronic Acid vào sâu trong da.' },
      { title: 'Đắp mặt nạ phục hồi', desc: 'Mặt nạ vitamin khóa ẩm và làm dịu da tức thì.' }
    ]
  },
  {
    slug: 'nang-co-hifu',
    title: 'Nâng cơ trẻ hóa Hifu',
    shortDesc: 'Sử dụng sóng siêu âm hội tụ cường độ cao tác động vào lớp cơ nông, giúp xóa nhăn, thon gọn viền hàm tức thì không nghỉ dưỡng.',
    image: 'assets/doctor.jpg',
    intro: 'HIFU (High Intensity Focused Ultrasound) là công nghệ nâng cơ không xâm lấn được ứng dụng rộng rãi trong thẩm mỹ da liễu. Sóng siêu âm hội tụ tác động chính xác vào lớp cân cơ nông (SMAS) - lớp mô vốn chỉ can thiệp được bằng phẫu thuật căng da trước đây - kích thích tái tạo collagen, giúp da săn chắc và viền hàm gọn gàng hơn.',
    benefits: [
      'Tác động đúng lớp cơ SMAS, hiệu quả nâng cơ rõ rệt',
      'Không phẫu thuật, không cần thời gian nghỉ dưỡng',
      'Kích thích collagen tự nhiên, hiệu quả kéo dài 1-2 năm',
      'Cải thiện đường viền hàm, giảm chảy xệ vùng má dưới'
    ],
    suitableFor: [
      'Da bắt đầu chảy xệ, viền hàm kém săn chắc',
      'Người muốn nâng cơ mà không muốn phẫu thuật',
      'Độ tuổi 30+ có dấu hiệu lão hóa collagen'
    ],
    process: [
      { title: 'Đánh giá vùng da cần nâng cơ', desc: 'Bác sĩ xác định độ sâu và năng lượng phù hợp.' },
      { title: 'Ủ tê & đánh dấu vùng điều trị', desc: 'Đảm bảo trải nghiệm dễ chịu trong suốt quá trình.' },
      { title: 'Chiếu sóng HIFU hội tụ', desc: 'Năng lượng tác động chính xác vào lớp cân cơ nông.' },
      { title: 'Theo dõi kết quả sau 1-3 tháng', desc: 'Collagen tiếp tục tái tạo, hiệu quả rõ dần theo thời gian.' }
    ]
  },
  {
    slug: 'seo-ro',
    title: 'Điều trị sẹo rỗ chuyên sâu',
    shortDesc: 'Kỹ thuật tách xơ sẹo kết hợp Laser CO2 Fractional phá vỡ chân sẹo xơ cứng lâu năm, khôi phục cấu trúc collagen và làm đầy lõm sẹo.',
    image: 'assets/before_skin.png',
    intro: 'Sẹo rỗ hình thành khi collagen bị phá hủy trong quá trình viêm mụn kéo dài, để lại các vết lõm khó phục hồi tự nhiên. Phác đồ đa trị liệu kết hợp tách xơ chân sẹo và Laser CO2 Fractional giúp phá vỡ mô xơ cứng, kích thích tái tạo collagen mới để làm đầy dần các vết lõm.',
    benefits: [
      'Phá vỡ chân sẹo xơ cứng lâu năm hiệu quả',
      'Kích thích tái tạo collagen làm đầy sẹo lõm',
      'Cải thiện đồng thời kết cấu và độ mịn bề mặt da',
      'Phác đồ đa trị liệu cá nhân hóa theo loại sẹo'
    ],
    suitableFor: [
      'Sẹo rỗ đáy nhọn, đáy vuông, đáy tròn lâu năm',
      'Da từng bị mụn nặng để lại nhiều tổn thương',
      'Người đã thử các phương pháp khác nhưng chưa cải thiện'
    ],
    process: [
      { title: 'Phân loại sẹo rỗ', desc: 'Xác định loại sẹo và độ sâu để chọn kỹ thuật phù hợp.' },
      { title: 'Tách xơ chân sẹo', desc: 'Giải phóng mô xơ kéo đáy sẹo xuống, tạo điều kiện tái tạo.' },
      { title: 'Laser CO2 Fractional', desc: 'Kích thích tái tạo collagen làm đầy vùng lõm.' },
      { title: 'Chăm sóc phục hồi chuyên sâu', desc: 'Serum tế bào gốc và chống nắng hỗ trợ hồi phục tối ưu.' }
    ]
  },
  {
    slug: 'triet-long-diode',
    title: 'Triệt lông vĩnh viễn Diode',
    shortDesc: 'Ứng dụng công nghệ ánh sáng lạnh vô khuẩn giúp làm sạch gốc nang lông cơ thể, ngăn tái phát vĩnh viễn đồng thời trị thâm sần tối ưu.',
    image: 'assets/treatment_room.png',
    intro: 'Diode Laser là công nghệ triệt lông thế hệ mới sử dụng bước sóng ánh sáng lạnh, tác động trực tiếp vào nang lông ở giai đoạn tăng trưởng để phá hủy khả năng mọc lại, trong khi vẫn đảm bảo an toàn và dễ chịu cho làn da xung quanh.',
    benefits: [
      'Triệt lông tận gốc, hạn chế mọc lại theo thời gian',
      'Công nghệ ánh sáng lạnh giảm đau rát khi thực hiện',
      'Cải thiện tình trạng da sần, thâm nang lông',
      'Phù hợp mọi vùng da trên cơ thể'
    ],
    suitableFor: [
      'Người có lông dày, mọc nhanh, hay bị thâm nang lông',
      'Người mong muốn kết quả triệt lông lâu dài',
      'Da nhạy cảm cần công nghệ nhẹ nhàng hơn'
    ],
    process: [
      { title: 'Cạo lông vùng điều trị', desc: 'Làm sạch bề mặt để tia laser tác động hiệu quả nhất.' },
      { title: 'Đo bước sóng phù hợp', desc: 'Điều chỉnh năng lượng theo loại da và độ dày lông.' },
      { title: 'Chiếu Diode Laser', desc: 'Ánh sáng lạnh phá hủy nang lông ở giai đoạn tăng trưởng.' },
      { title: 'Làm dịu da sau chiếu', desc: 'Thoa gel làm dịu, hạn chế tiếp xúc ánh nắng trực tiếp.' }
    ]
  },
  {
    slug: 'viem-da-co-dia',
    title: 'Điều trị viêm da cơ địa',
    shortDesc: 'Thăm khám, xét nghiệm chẩn đoán chính xác nguyên nhân dị ứng. Phác đồ bôi thuốc kháng viêm an toàn không để lại di chứng.',
    image: 'assets/after_skin.png',
    intro: 'Viêm da cơ địa là bệnh lý mạn tính gây đỏ rát, ngứa và bong tróc, dễ tái phát nếu không xác định đúng nguyên nhân. Bác sĩ da liễu sẽ thăm khám, xét nghiệm khi cần thiết để chẩn đoán chính xác, từ đó xây dựng phác đồ điều trị kháng viêm phù hợp và hướng dẫn phòng ngừa tái phát lâu dài.',
    benefits: [
      'Chẩn đoán chính xác nguyên nhân gây viêm da',
      'Phác đồ kháng viêm an toàn, hạn chế tác dụng phụ',
      'Phục hồi hàng rào bảo vệ da, giảm ngứa rát nhanh',
      'Tư vấn phòng ngừa tái phát lâu dài'
    ],
    suitableFor: [
      'Da đỏ rát, ngứa, bong tróc kéo dài',
      'Viêm da cơ địa tái phát nhiều lần',
      'Trẻ em và người lớn có cơ địa dị ứng'
    ],
    process: [
      { title: 'Thăm khám lâm sàng', desc: 'Bác sĩ đánh giá mức độ viêm và các yếu tố khởi phát.' },
      { title: 'Xét nghiệm khi cần thiết', desc: 'Xác định dị nguyên hoặc yếu tố liên quan nếu có.' },
      { title: 'Điều trị kháng viêm', desc: 'Kê đơn thuốc bôi/uống phù hợp mức độ bệnh.' },
      { title: 'Theo dõi & phòng ngừa', desc: 'Hướng dẫn chăm sóc da, tránh tác nhân gây tái phát.' }
    ]
  },
  {
    slug: 'tiem-botox',
    title: 'Tiêm Botox',
    shortDesc: 'Tiêm botulinum toxin chuẩn liều lượng y khoa giúp thon gọn hàm, cải thiện nhăn động vùng trán, đuôi mắt tự nhiên, an toàn.',
    image: 'assets/doctor.jpg',
    intro: 'Botox (botulinum toxin) được ứng dụng phổ biến trong thẩm mỹ da liễu để làm giảm hoạt động cơ quá mức - nguyên nhân gây nếp nhăn động vùng trán, đuôi mắt hoặc cơ hàm to. Với liều lượng chuẩn y khoa do bác sĩ trực tiếp thực hiện, kết quả mang lại tự nhiên, không gây cứng đơ biểu cảm.',
    benefits: [
      'Làm mờ nếp nhăn động vùng trán, đuôi mắt tự nhiên',
      'Thon gọn hàm nhờ giảm hoạt động cơ cắn',
      'Liều lượng chuẩn y khoa, bác sĩ trực tiếp thực hiện',
      'Thời gian thực hiện nhanh, không cần nghỉ dưỡng'
    ],
    suitableFor: [
      'Nếp nhăn động vùng trán, đuôi mắt khi biểu cảm',
      'Khuôn mặt vuông do cơ cắn phì đại',
      'Người muốn cải thiện nếp nhăn mà không phẫu thuật'
    ],
    process: [
      { title: 'Tư vấn & đánh giá cơ mặt', desc: 'Bác sĩ xác định nhóm cơ và liều lượng phù hợp.' },
      { title: 'Sát khuẩn vùng tiêm', desc: 'Đảm bảo vô trùng tuyệt đối trước khi thực hiện.' },
      { title: 'Tiêm Botox chuẩn liều', desc: 'Bác sĩ trực tiếp tiêm tại các điểm đã xác định.' },
      { title: 'Theo dõi sau tiêm', desc: 'Hướng dẫn chăm sóc và lịch tái khám đánh giá hiệu quả.' }
    ]
  },
  {
    slug: 'xoa-nhan',
    title: 'Xóa nhăn',
    shortDesc: 'Kết hợp Laser tái tạo bề mặt và căng chỉ collagen sinh học giúp làm mờ nếp nhăn tĩnh, mang lại làn da căng mịn, tươi trẻ.',
    image: 'assets/hero_clinic.png',
    intro: 'Khác với nếp nhăn động do biểu cảm, nếp nhăn tĩnh hình thành do collagen suy giảm theo tuổi tác và tồn tại kể cả khi gương mặt ở trạng thái nghỉ. Liệu trình xóa nhăn kết hợp Laser tái tạo bề mặt và căng chỉ collagen sinh học giúp kích thích tái tạo mô, làm đầy và làm mờ nếp nhăn từ bên trong.',
    benefits: [
      'Làm mờ nếp nhăn tĩnh vùng trán, khóe miệng, cổ',
      'Kích thích tái tạo collagen sinh học tự nhiên',
      'Da căng mịn, tươi trẻ hơn sau liệu trình',
      'Kết hợp linh hoạt với các liệu trình trẻ hóa khác'
    ],
    suitableFor: [
      'Nếp nhăn tĩnh đã rõ kể cả khi gương mặt thư giãn',
      'Da chảy xệ nhẹ kèm nếp nhăn vùng cổ, khóe miệng',
      'Người muốn cải thiện toàn diện dấu hiệu lão hóa'
    ],
    process: [
      { title: 'Đánh giá nếp nhăn', desc: 'Xác định vị trí và mức độ nếp nhăn cần cải thiện.' },
      { title: 'Laser tái tạo bề mặt', desc: 'Kích thích tăng sinh collagen tại vùng điều trị.' },
      { title: 'Căng chỉ collagen sinh học', desc: 'Hỗ trợ nâng đỡ và làm đầy nếp nhăn sâu.' },
      { title: 'Dưỡng phục hồi da', desc: 'Chăm sóc chuyên sâu giúp da ổn định nhanh chóng.' }
    ]
  }
];
