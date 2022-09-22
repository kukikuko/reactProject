import './Bottom.css';

function Bottom () {
    return(
    <>
        <div className='bottomMain'>
            <div className='bm1'>
                <div><span className='bm1Span'>고객행복센터</span> 365일 오전 7시 - 오후 7시</div>
                <div className='bm1str'><strong>1644-0000</strong></div>
                <div>
                    <button>카카오톡 문의</button>
                    <button>1:1 문의</button>
                    <button> 대량주문 문의</button>
                </div>
                <div className='bm1gray'>
                    비회원 문의 : help@0000.com <br />
                    비회원 대량주문 문의 : kurlygift@0000.com
                </div>
            </div>
            <div className='bm2'>
                <div>컬리소개 컬리소개영상 인재채용 이용약관 <span className='bm2span'>개인정보처리방침</span> 이용안내</div>
                <div className='bm2div'>
                    법인명(상호) : 주식회사 컬리 | 사업자등록번호 : 261-81-00000 <span>사업자정보 확인</span> <br />
                    통신판매업 : 제 2018-서울강남-00000호 | 개인정보보호책임자 : 아무개 <br />
                    주소 : 서울특별시 강남구 테헤란로 000, 00층 | 대표이사 : 아무개 <br />
                    입점문의 : <span>입점문의하기</span> | 제휴문의 : business@0000.com <br />
                    채용문의 : <span>recruit@0000.com</span> <br />
                    팩스 : 070-7500-0000
                </div>
            </div>
        </div>
        <div className='bottomBtn'>
            <button onClick={()=>{
                window.open("https://res.kurly.com/kurly/img/2022/isms_220310.png", "_blank", {width : "514px"});
            }}> 
                <img src='https://res.kurly.com/pc/ico/2208/logo_isms.svg'></img>
                <div>
                [인증범위] 마켓컬리 쇼핑몰 서비스 개발·운영 <br />
                (심사받지 않은 물리적 인프라 제외) <br />
                [유효기간] 2022.01.19 ~ 9999.12.31
                </div>
            </button>
            <button onClick={()=>{
                window.open("https://www.eprivacy.or.kr/front/certifiedSiteMark/certifiedSiteMarkPopup.do?certCmd=EP&certNum=2022-EP-R002", "_blank", {width : "514px"});
            }}> 
                <img src='https://res.kurly.com/pc/ico/2208/logo_privacy.svg'></img>
                <div>
                    개인정보보호 우수 웹사이트<br />
                    개인정보처리시스템 인증
                </div>
            </button>
            <button onClick={()=>{
                window.open("https://pgweb.uplus.co.kr/ms/escrow/s_escrowYn.do?mertid=go_thefarmers", "_blank", {width : "514px"});
            }}> 
                <img src='https://res.kurly.com/pc/ico/2208/logo_tosspayments.svg'></img>
                <div>
                    토스페이머츠 구매안전(에스크로) <br />
                    서비스를 이용하실 수 있습니다.
                </div>
            </button>
            <button onClick={()=>{
                window.open("https://res.kurly.com/https://res.kurly.com/kurly/img/2022/woori_popup_v2.png/img/2022/isms_220310.png", "_blank", {width : "514px"});
            }}> 
                <img src='https://res.kurly.com/pc/ico/2208/logo_isms.svg'></img>
                <div>
                    고객님이 현금으로 결제한 금액에 대해 우리은행과 <br />
                    채무지급보증 계약을 체결하여 안전거래를 보장하고<br />
                    있습니다
                </div>
            </button>
        </div>
        <div className='bottombt'>
            북컬리에서 판매되는 상품 중에는 북컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다. <br />
            마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
        </div>
        <div style={{marginBottom : "300px"}}></div>
    </>
    );
};

export default Bottom;