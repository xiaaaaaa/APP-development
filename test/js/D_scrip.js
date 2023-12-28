//nav
$(document).ready(function(){
    $("#benefits").click(function(){
        $("#nav-content").html(
        `<p class="nav-content">
            <u>減少罹患疾病的可能</u><br>
            公犬可能罹患攝護腺肥大、攝護腺癌、睪丸腫瘤、圍肛腺腫瘤等，母犬則是乳腺腫瘤、子宮蓄膿、子宮內膜炎、卵巢囊腫等病變<br>
            <br>
            <u>改善行為問題</u><br>
            受賀爾蒙的影響，讓狗狗常有亂尿尿、過度的領域性、攻擊行為、性情暴躁、好色等令人頭痛的行為<br>
            <br>
            <u>減少流浪毛孩的問題</u><br>
            可以防止毛孩的意外繁殖，造成無法負荷飼養幼年毛孩的情況<br>
            <br>
            <u>防止被罰款</u><br>
            根據動物保護法第27條，未替寵物絕育且未申報及提出繁殖管理說明，或未申報繁殖需求而繁殖寵物，可處新台幣5萬元以上、<br>25萬元以下罰鍰 (根據動物保護法第二十二條第三項)<br>
        </p>`
        );
    });
    
    $("#about-us").click(function(){
        $("#nav-content").html(
        `<p class="nav-content">
            「關愛流浪動物，為他們的未來創造溫暖，我們希望帶給這世界更多的愛!>.<」<br>
            <br>
            -團隊介紹-<br>
            <br>
            國北數位-XIA  IG: _xiaaaaaa<br>
            <br>
            國北數位-XIN  IG: sinyuuu_1104<br>
        </p>`
        );
    });
    
    $("#law").click(function(){
        $("#nav-content").html(
        `
            <div class="nav-content">
                <p>臺北市動物保護處:</p>
                <a href="https://www.tcapo.gov.taipei/News_Content.aspx?n=CCD8897BADEB79E0&sms=78D644F2755ACCAA&s=135B1EA3BB36EA76" class="law-link">
                結紮有必要嗎?免絕育申請懶人包!未結紮恐罰新臺幣5萬元以上25萬元以下!</a>
                <br><br>
                <p>全國法規資料庫:</p>
                <a href="https://law.moj.gov.tw/LawClass/LawSingleRela.aspx?PCODE=M0060027&FLNO=33-1&ty=L" class="law-link">
                棄養要負什麼法律責任?拋棄小可愛恐罰新臺幣3萬元以上15萬元以下!0.0 </a>
                <br><br>
                <p>全國法規資料庫:</p>
                <a href="https://law.moj.gov.tw/SmartSearch/Theme.aspx?T=30&O=1.2" class="law-link">
                虐待動物不可忍!發現有人虐待動物該怎麼辦?法律制裁，安心一半~</a>
            </div>
        `
        );
    });
});


