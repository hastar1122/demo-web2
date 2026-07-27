/* ==========================================================================
   Shared news/article catalogue - used by tin-tuc.html (listing) and
   tin-tuc-chi-tiet.html (detail template, reads ?slug= from the URL).
   Kept as plain data so both pages render from a single source of truth.
   ========================================================================== */
const NEWS_DATA = [
  {
    slug: 'cham-soc-da-sau-laser-nam',
    title: 'Cách chăm sóc da sau khi điều trị laser nám chuẩn khoa học',
    category: 'Chăm sóc da',
    date: '09 Tháng 7, 2026',
    author: 'Bác sĩ Hoàng Anh',
    image: 'assets/treatment_room.png',
    excerpt: 'Trị nám bằng laser mang lại kết quả cao nhưng làn da sau bắn laser rất nhạy cảm. Việc chăm sóc đúng cách sẽ giúp tối ưu hiệu quả điều trị và ngăn ngừa tái phát. Bài viết này sẽ hướng dẫn chi tiết các bước làm sạch, dưỡng ẩm phục hồi và chống nắng sau liệu trình laser...',
    views: 1234,
    sections: [
      {
        paragraphs: [
          'Laser trị nám hoạt động bằng cách phá vỡ các hạt sắc tố melanin sẫm màu nằm sâu dưới biểu bì để cơ thể tự đào thải dần. Đây là công nghệ mang lại hiệu quả rõ rệt, nhưng đồng thời cũng tạo ra những vi tổn thương tạm thời trên bề mặt da - giai đoạn phục hồi sau đó quan trọng không kém gì bản thân liệu trình.'
        ]
      },
      {
        heading: 'Những thay đổi trên da sau khi chiếu laser',
        paragraphs: [
          'Trong 3-5 ngày đầu, da thường ửng đỏ nhẹ, có cảm giác căng rát và có thể xuất hiện các đốm sắc tố sậm màu hơn tạm thời (đây là dấu hiệu bình thường cho thấy hắc sắc tố đang trồi lên bề mặt để bong tróc). Một số trường hợp da khô nhẹ và bong vảy mỏng trong tuần đầu tiên.'
        ]
      },
      {
        heading: '3 nguyên tắc chăm sóc da cần tuân thủ',
        paragraphs: [
          'Thứ nhất, chỉ làm sạch da bằng sữa rửa mặt dịu nhẹ, không chứa hạt tẩy tế bào chết hay cồn. Thứ hai, tạm ngưng các sản phẩm đặc trị chứa AHA/BHA, Retinol trong ít nhất 7-10 ngày để tránh kích ứng. Thứ ba, ưu tiên dưỡng ẩm phục hồi hàng rào bảo vệ da bằng các thành phần lành tính như HA, B5, Ceramide theo hướng dẫn của bác sĩ.'
        ]
      },
      {
        heading: 'Chống nắng nghiêm ngặt - yếu tố quyết định thành công',
        paragraphs: [
          'Da sau laser cực kỳ nhạy cảm với tia UV, nếu không bảo vệ kỹ, nám hoàn toàn có thể tái phát hoặc để lại tăng sắc tố sau viêm (PIH). Cần thoa kem chống nắng phổ rộng SPF 50+ mỗi 2-3 giờ, kết hợp che chắn vật lý bằng khẩu trang, nón rộng vành khi ra ngoài, kể cả khi trời râm mát.'
        ]
      },
      {
        paragraphs: [
          'Chăm sóc da đúng cách sau mỗi buổi laser không chỉ giúp rút ngắn thời gian phục hồi mà còn quyết định trực tiếp đến kết quả điều trị lâu dài. Nếu có bất kỳ dấu hiệu bất thường nào như sưng viêm kéo dài, hãy liên hệ ngay với bác sĩ để được thăm khám kịp thời.'
        ]
      }
    ]
  },
  {
    slug: 'hieu-dung-mun-boc',
    title: 'Hiểu đúng về các loại mụn bọc và phác đồ điều trị tận gốc',
    category: 'Điều trị mụn',
    date: '05 Tháng 7, 2026',
    author: 'Bác sĩ Nguyễn Mai',
    image: 'assets/hero_clinic.png',
    imageStyle: 'filter: hue-rotate(45deg);',
    excerpt: 'Mụn bọc viêm nhiễm sâu dưới bề mặt biểu bì dễ gây ra các tổn thương lớn để lại sẹo rỗ vĩnh viễn. Việc nhận biết đúng loại mụn và áp dụng phương pháp điều trị phù hợp là chìa khóa để có làn da khỏe mạnh. Cùng bác sĩ da liễu tìm ra nguyên nhân và cách xử lý hiệu quả nhất...',
    views: 2156,
    sections: [
      {
        paragraphs: [
          'Mụn bọc là dạng mụn viêm nặng, hình thành khi vi khuẩn P. acnes phát triển mạnh trong nang lông bị bít tắc, gây phản ứng viêm lan rộng xuống lớp trung bì. Khác với mụn đầu trắng hay mụn đầu đen, mụn bọc thường sưng to, đau nhức và có nguy cơ để lại sẹo rỗ nếu không được xử lý đúng cách.'
        ]
      },
      {
        heading: 'Vì sao mụn bọc dễ để lại sẹo?',
        paragraphs: [
          'Ổ viêm của mụn bọc ăn sâu xuống cấu trúc collagen bên dưới da. Khi tình trạng viêm không được kiểm soát kịp thời, các sợi collagen bị phá hủy, hình thành nên các vết lõm sẹo rỗ khó phục hồi tự nhiên. Việc tự ý nặn mụn bọc tại nhà càng làm tăng nguy cơ nhiễm trùng và để lại sẹo vĩnh viễn.'
        ]
      },
      {
        heading: 'Phác đồ điều trị mụn bọc tận gốc',
        paragraphs: [
          'Tại phòng khám, bác sĩ sẽ thăm khám và soi da để xác định mức độ viêm, từ đó xây dựng phác đồ cá nhân hóa: làm sạch nhân mụn vô trùng bằng dụng cụ y tế chuyên dụng, kết hợp kháng viêm tại chỗ hoặc đường uống khi cần thiết, và chiếu ánh sáng sinh học để đẩy nhanh quá trình phục hồi mà không để lại sẹo thâm.'
        ]
      },
      {
        paragraphs: [
          'Không nên chủ quan hay tự điều trị mụn bọc tại nhà bằng các mẹo dân gian chưa được kiểm chứng. Thăm khám sớm với bác sĩ da liễu giúp kiểm soát viêm nhiễm kịp thời, giữ lại làn da khỏe mạnh và tránh những tổn thương khó hồi phục về sau.'
        ]
      }
    ]
  },
  {
    slug: 'so-sanh-ultherapy-hifu',
    title: 'So sánh công nghệ nâng cơ Ultherapy và HIFU trẻ hóa da',
    category: 'Trẻ hóa da',
    date: '28 Tháng 6, 2026',
    author: 'Bác sĩ Lê Minh',
    image: 'assets/treatment_room.png',
    imageStyle: 'filter: hue-rotate(180deg);',
    excerpt: 'Cả Ultherapy và HIFU đều sử dụng sóng siêu âm hội tụ giúp trẻ hóa cơ mặt chảy xệ hiệu quả mà không cần dao kéo. Tuy nhiên, mỗi công nghệ có những ưu điểm riêng phù hợp với từng đối tượng. Đâu mới là sự lựa chọn phù hợp nhất cho làn da của bạn? Hãy cùng tìm hiểu...',
    views: 1892,
    sections: [
      {
        paragraphs: [
          'Ultherapy và HIFU đều thuộc nhóm công nghệ nâng cơ không xâm lấn sử dụng sóng siêu âm hội tụ cường độ cao (High Intensity Focused Ultrasound), tác động vào lớp cân cơ nông (SMAS) để kích thích tăng sinh collagen mới. Đây là hai cái tên được nhắc đến nhiều nhất khi nói về trẻ hóa da không phẫu thuật.'
        ]
      },
      {
        heading: 'Điểm giống nhau giữa hai công nghệ',
        paragraphs: [
          'Cả hai đều tác động đến cùng một lớp mô đích (SMAS), đều không xâm lấn, không cần nghỉ dưỡng và mang lại hiệu quả nâng cơ, giảm chảy xệ kéo dài từ 1-2 năm. Cơ chế sinh học phía sau - kích thích tân tạo collagen tự nhiên - về bản chất là tương đồng.'
        ]
      },
      {
        heading: 'Khác biệt cần lưu ý khi lựa chọn',
        paragraphs: [
          'Sự khác biệt chủ yếu nằm ở đầu phát năng lượng, độ chính xác của hệ thống hình ảnh siêu âm dẫn đường và cường độ năng lượng có thể tùy chỉnh theo từng vùng da. Bác sĩ sẽ đánh giá độ dày da, mức độ chảy xệ và cơ địa của từng khách hàng để đề xuất công nghệ cùng mức năng lượng phù hợp nhất, thay vì áp dụng một công thức chung cho tất cả.'
        ]
      },
      {
        paragraphs: [
          'Dù lựa chọn công nghệ nào, yếu tố quan trọng nhất vẫn là tay nghề bác sĩ trực tiếp thực hiện và việc thăm khám, đánh giá da kỹ lưỡng trước liệu trình. Đặt lịch tư vấn để được bác sĩ da liễu kiểm tra và đưa ra phác đồ nâng cơ phù hợp nhất với tình trạng da của bạn.'
        ]
      }
    ]
  },
  {
    slug: 'cong-nghe-co2-fractional-seo-ro',
    title: 'Công nghệ CO2 Fractional Laser - Giải pháp tối ưu cho sẹo rỗ',
    category: 'Điều trị sẹo',
    date: '20 Tháng 6, 2026',
    author: 'Bác sĩ Lê Minh',
    image: 'assets/before_skin.png',
    excerpt: 'Sẹo rỗ là hậu quả phổ biến sau mụn viêm, gây mất thẩm mỹ và ảnh hưởng tâm lý. Công nghệ CO2 Fractional Laser hiện đại giúp kích thích tái tạo collagen, làm đầy các vết lõm sâu một cách an toàn và hiệu quả. Tìm hiểu chi tiết về quy trình và kết quả điều trị...',
    views: 1567,
    sections: [
      {
        paragraphs: [
          'Sẹo rỗ hình thành khi cấu trúc collagen bị phá hủy trong quá trình viêm mụn kéo dài, để lại các vết lõm mà da không thể tự làm đầy. Trong số các phương pháp điều trị sẹo rỗ hiện nay, CO2 Fractional Laser được đánh giá là một trong những công nghệ mang lại hiệu quả tối ưu và toàn diện nhất.'
        ]
      },
      {
        heading: 'Cơ chế hoạt động của CO2 Fractional Laser',
        paragraphs: [
          'Công nghệ này tạo ra hàng nghìn vi tổn thương có kiểm soát trên bề mặt da theo dạng phân đoạn (fractional), kích hoạt quá trình tự chữa lành tự nhiên của cơ thể. Vùng da xung quanh mỗi vi tổn thương không bị ảnh hưởng, giúp rút ngắn thời gian hồi phục so với các phương pháp laser toàn bề mặt truyền thống.'
        ]
      },
      {
        heading: 'Quy trình điều trị và số buổi cần thiết',
        paragraphs: [
          'Tùy vào độ sâu và loại sẹo (đáy nhọn, đáy vuông hay đáy tròn), bác sĩ có thể kết hợp thêm kỹ thuật tách xơ chân sẹo trước khi chiếu laser để tăng hiệu quả làm đầy. Một liệu trình hoàn chỉnh thường cần từ 3-5 buổi, cách nhau 4-6 tuần để da có đủ thời gian tái tạo collagen mới giữa các lần điều trị.'
        ]
      },
      {
        paragraphs: [
          'Kết quả cải thiện sẹo rỗ thường rõ rệt dần theo từng buổi khi collagen mới được sinh ra liên tục trong nhiều tháng sau điều trị. Chăm sóc da đúng cách và chống nắng nghiêm ngặt giữa các buổi cũng góp phần quan trọng giúp tối ưu hóa kết quả cuối cùng.'
        ]
      }
    ]
  },
  {
    slug: 'thoi-quen-chong-lao-hoa',
    title: '5 thói quen hàng ngày giúp chống lão hóa da hiệu quả',
    category: 'Chống lão hóa',
    date: '15 Tháng 6, 2026',
    author: 'Bác sĩ Hoàng Anh',
    image: 'assets/after_skin.png',
    excerpt: 'Lão hóa da là quá trình tự nhiên nhưng có thể được làm chậm lại bằng những thói quen chăm sóc đúng đắn. Từ việc chống nắng đến chế độ dinh dưỡng, mỗi yếu tố đều đóng vai trò quan trọng. Khám phá 5 bí quyết đơn giản nhưng vô cùng hiệu quả để giữ làn da luôn tươi trẻ...',
    views: 3421,
    sections: [
      {
        paragraphs: [
          'Lão hóa da chịu tác động từ cả yếu tố nội sinh (tuổi tác, di truyền) lẫn ngoại sinh (ánh nắng, ô nhiễm, lối sống). Trong khi không thể can thiệp vào yếu tố nội sinh, việc xây dựng những thói quen chăm sóc da khoa học mỗi ngày hoàn toàn có thể làm chậm đáng kể quá trình lão hóa ngoại sinh.'
        ]
      },
      {
        heading: '1. Chống nắng là bước không thể bỏ qua',
        paragraphs: [
          'Hơn 80% dấu hiệu lão hóa da đến từ tia UV. Thoa kem chống nắng phổ rộng SPF 30 trở lên mỗi sáng, kể cả khi ở trong nhà gần cửa sổ, là bước chăm sóc da chống lão hóa quan trọng nhất mà bất kỳ ai cũng nên duy trì.'
        ]
      },
      {
        heading: '2-4. Dưỡng ẩm, chống oxy hóa và ngủ đủ giấc',
        paragraphs: [
          'Cấp ẩm đầy đủ giúp duy trì hàng rào bảo vệ da khỏe mạnh, trong khi các sản phẩm chứa Vitamin C, E giúp trung hòa gốc tự do sinh ra từ môi trường ô nhiễm. Bên cạnh đó, giấc ngủ chất lượng là thời điểm da tự phục hồi và tái tạo collagen tự nhiên hiệu quả nhất trong ngày.'
        ]
      },
      {
        heading: '5. Thăm khám da định kỳ với bác sĩ chuyên khoa',
        paragraphs: [
          'Bên cạnh chăm sóc tại nhà, việc thăm khám định kỳ giúp phát hiện sớm các dấu hiệu lão hóa và lựa chọn đúng liệu trình can thiệp công nghệ cao khi cần thiết, thay vì tự ý sử dụng sản phẩm không phù hợp với tình trạng da thực tế.'
        ]
      }
    ]
  },
  {
    slug: 'cham-soc-da-mua-he',
    title: 'Bí quyết chăm sóc da mùa hè tránh tổn thương do ánh nắng',
    category: 'Mẹo làm đẹp',
    date: '10 Tháng 6, 2026',
    author: 'Bác sĩ Nguyễn Mai',
    image: 'assets/doctor.jpg',
    excerpt: 'Mùa hè với cường độ tia UV cao là thời điểm da dễ bị tổn thương nhất. Nám, tàn nhang, lão hóa sớm đều có thể xuất hiện nếu không bảo vệ da đúng cách. Tìm hiểu cách chọn kem chống nắng phù hợp, thời điểm thoa lại và các bước chăm sóc da toàn diện trong mùa hè...',
    views: 2789,
    sections: [
      {
        paragraphs: [
          'Chỉ số tia UV vào mùa hè thường cao hơn đáng kể so với các mùa khác trong năm, khiến làn da phải đối mặt với nguy cơ tăng sắc tố, cháy nắng và lão hóa sớm nếu không được bảo vệ đúng cách. Dưới đây là những nguyên tắc chăm sóc da mùa hè bác sĩ da liễu khuyến nghị.'
        ]
      },
      {
        heading: 'Chọn kem chống nắng phù hợp',
        paragraphs: [
          'Ưu tiên kem chống nắng phổ rộng (Broad Spectrum) với chỉ số SPF 50+, PA++++ cho những ngày cường độ nắng gắt. Với da dầu mụn, nên chọn kết cấu dạng gel hoặc sữa mỏng nhẹ, không gây bít tắc lỗ chân lông.'
        ]
      },
      {
        heading: 'Thoa lại đúng thời điểm',
        paragraphs: [
          'Kem chống nắng cần được thoa lại mỗi 2-3 giờ khi hoạt động ngoài trời, hoặc ngay sau khi đổ nhiều mồ hôi/tiếp xúc với nước. Kết hợp thêm các biện pháp che chắn vật lý như nón rộng vành, khẩu trang chống nắng và kính râm để bảo vệ toàn diện.'
        ]
      },
      {
        paragraphs: [
          'Ngoài các bước bảo vệ, mùa hè cũng là thời điểm da dễ mất nước và tiết dầu nhiều hơn - đừng quên tăng cường cấp ẩm dạng gel/lotion mỏng nhẹ song song với chống nắng để giữ làn da luôn khỏe mạnh, cân bằng trong suốt mùa nắng nóng.'
        ]
      }
    ]
  }
];
