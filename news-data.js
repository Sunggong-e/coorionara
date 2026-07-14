/* ══════════════════════════════════════════════════════════════
   COORIONARA — Company News data
   이 파일을 직접 편집해서 뉴스를 추가·수정·삭제하세요 (CMS 불필요).
   각 뉴스 항목은 아래 배열(window.NEWS_DATA)에 하나의 { ... } 객체로 추가합니다.
   맨 앞 항목이 "featured"(대표 뉴스)이며, featured가 없으면 날짜 최신순으로 정렬됩니다.

   필드 설명:
   - id            : 고유 번호 (문자열, 예: "002")
   - date          : "YYYY-MM-DD" 형식
   - category_*    : 카테고리 (en/ko/zh/zh_tw)
   - title_*       : 제목 (en/ko/zh/zh_tw)
   - summary_*     : 요약 (en/ko/zh/zh_tw)
   - thumbnail     : 썸네일 이미지 경로 (news/파일명.jpg)
   - link          : 클릭 시 이동할 링크 ("#"이면 링크 없음)
   - featured      : true/false — 대표 뉴스로 강조 표시할지 여부

   ※ index.html과 news.html이 이 파일(news-data.js)을 <script>로 직접
      불러오기 때문에, 브라우저에서 파일을 더블클릭해서 열어도(file://)
      뉴스가 정상적으로 보입니다.
══════════════════════════════════════════════════════════════ */
window.NEWS_DATA = [
  {
    "id": "002",
    "date": "2026-05-12",
    "category_en": "Award",
    "category_ko": "수상",
    "category_zh": "获奖",
    "category_zh_tw": "獲獎",
    "title_en": "Great News | COORIONARA Wins the 30th CBE Selected Cosmetics Brands (Imported) Award",
    "title_ko": "낭보｜코리오나라, 제30회 CBE '수입 우수 뷰티 브랜드' 수상",
    "title_zh": "喜报｜珂莉安斩获第30届CBE美妆好品牌（进口）殊荣",
    "title_zh_tw": "喜報｜珂莉安斬獲第30屆CBE美妝好品牌（進口）殊榮",
    "summary_en": "At the 30th China Beauty Expo (CBE), Hall E2-J09, Shanghai New International Expo Centre, imported skincare brand COORIONARA was honored with the '30th CBE Selected Cosmetics Brands (Imported)' award in recognition of its strong product quality and market reputation. Rigorously judged by CBE, the award reflects high industry recognition of COORIONARA's professionalism and quality in the imported skincare category. Rooted in salon-channel skincare and the philosophy of 'simplified beauty, scientific skincare,' COORIONARA continues to earn consumer trust through gentle, effective formulas — and this milestone marks a new starting point for continued growth.",
    "summary_ko": "상하이 뉴 인터내셔널 엑스포 센터 E2-J09홀에서 열린 제30회 중국미용박람회(CBE)에서, 수입 스킨케어 브랜드 코리오나라가 뛰어난 제품력과 시장 신뢰를 인정받아 '제30회 CBE 수입 우수 뷰티 브랜드' 인증을 수상했습니다. CBE의 엄격한 심사를 거친 이 상은 수입 스킨케어 브랜드의 전문성과 품질력에 대한 업계의 높은 인정을 의미합니다. 살롱 채널과 '감(減) 뷰티·과학적 피부 관리' 철학에 뿌리를 둔 코리오나라는 순하고 효과적인 포뮬라로 수많은 고객의 신뢰를 쌓아왔으며, 이번 수상은 앞으로도 지속적인 발전을 다짐하는 새로운 출발점이 되었습니다.",
    "summary_zh": "近日，第30届中国美容博览会（CBE）重磅奖项正式揭晓，进口护肤品牌COORIONARA珂莉安凭借过硬产品实力与良好市场口碑，荣获第30届CBE美妆好品牌（进口）权威认证。本次奖项由CBE官方严格评选，是美妆行业极具含金量的荣誉，代表市场、行业对进口护肤品牌专业力、品质力的高度认可。珂莉安深耕院线及「减」美护肤、科学理肤赛道，以温和有效的护肤配方收获万千消费者信赖。三十载CBE见证美妆行业迭代，珂莉安此次获奖，既是品牌过往深耕市场的成果印证，也是未来持续精进的全新起点。",
    "summary_zh_tw": "近日，第30屆中國美容博覽會（CBE）重磅獎項正式揭曉，進口護膚品牌COORIONARA珂莉安憑藉過硬產品實力與良好市場口碑，榮獲第30屆CBE美妝好品牌（進口）權威認證。本次獎項由CBE官方嚴格評選，是美妝行業極具含金量的榮譽，代表市場、行業對進口護膚品牌專業力、品質力的高度認可。珂莉安深耕院線及「減」美護膚、科學理膚賽道，以溫和有效的護膚配方收穫萬千消費者信賴。三十載CBE見證美妝行業迭代，珂莉安此次獲獎，既是品牌過往深耕市場的成果印證，也是未來持續精進的全新起點。",
    "thumbnail": "news/rewards_202605.jpg",
    "link": "#",
    "featured": true
  },
  {
    "id": "001",
    "date": "2026-05-13",
    "category_en": "Trade Show",
    "category_ko": "박람회",
    "category_zh": "展会",
    "category_zh_tw": "展會",
    "title_en": "COORIONARA at the 30th CBE China Beauty Expo, Shanghai",
    "title_ko": "코리오나라, 제30회 CBE 중국미용박람회 상하이 참가",
    "title_zh": "珂莉安亮相第30届CBE中国美容博览会，开启美业新征程",
    "title_zh_tw": "珂莉安亮相第30屆CBE中國美容博覽會，開啟美業新征程",
    "summary_en": "COORIONARA presented its full skincare line at Booth E2-J09, Shanghai New International Expo Centre, May 12–14. Under the philosophy of 'Simplified Beauty · Scientific Skincare,' our team engaged with distributors, salon owners, and industry partners across China, with multiple partnership discussions initiated on-site.",
    "summary_ko": "5월 12일부터 14일까지 상하이 뉴 인터내셔널 엑스포 센터 E2-J09 부스에서 코리오나라 전 제품 라인을 선보였습니다. '감미 스킨케어·과학적 피부 관리' 철학을 바탕으로 전국 대리상, 미용원 원장, 업계 파트너들과 깊이 있는 교류를 나눴으며, 현장에서 다수의 초기 협력 의향이 체결됐습니다.",
    "summary_zh": "2026年5月12—14日，珂莉安携全线护肤产品亮相上海新国际博览中心E2-J09展位，以「减美护肤·科学理肤」核心主张与全国美业从业者深度交流。展会期间，渠道客商、美容院店主络绎不绝，现场洽谈氛围热烈，达成多组初步合作意向。",
    "summary_zh_tw": "2026年5月12—14日，珂莉安攜全線護膚產品亮相上海新國際博覽中心E2-J09展位，以「減美護膚·科學理膚」核心主張與全國美業從業者深度交流。展會期間，渠道客商、美容院店主絡繹不絕，現場洽談氛圍熱烈，達成多組初步合作意向。",
    "thumbnail": "news/cbe-2026-shanghai.jpg",
    "link": "#",
    "featured": false
  }
];
