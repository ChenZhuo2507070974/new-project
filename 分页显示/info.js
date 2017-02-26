/**
 * Created by CHENZ on 2017/2/25.
 */
$("tr:gt(0)").hover(
    function(){
        $(this).toggleClass("active")
    }
)
$("tr:gt(0)").click(
    function(){
        $(this).toggleClass("info");
        //console.log($(this).attr("class"));
    });
$('.pagination a:eq(0)').click(function(){
    var n=parseInt($('.pagination a:eq(1)').html());
    console.log(n);
    for (var i = 0; i < 5; i++) {
        $('.pagination a:eq('+(i+1)+')').html(parseInt($('.pagination a:eq('+(i+1)+')').html())-1);
        n++;
    }
    loadpage(parseInt($('.pagination a:eq(3)').html())-1);
})
$('.pagination a:eq(6)').click(function(){
    var n=parseInt($('.pagination a:eq(1)').html());
    console.log(n);
    for (var i = 0; i < 5; i++) {
        $('.pagination a:eq('+(i+1)+')').html(parseInt($('.pagination a:eq('+(i+1)+')').html())+1);
        n++;
    }
    loadpage(parseInt($('.pagination a:eq(3)').html())+1);
})
$('.pagination a:gt(0):lt(5)').click(function(){
    var n=parseInt($(this).html());
    console.log($(this).html());
    //$(this).html("");
    $('.pagination a:eq(1)').html(n-2);
    $('.pagination a:eq(2)').html(n-1);
    $('.pagination a:eq(3)').html(n);
    $('.pagination a:eq(4)').html(n+1);
    $('.pagination a:eq(5)').html(n+2);
    loadpage(n);
});
loadpage(1);
function  loadpage(pno) {
    $.ajax({
        url:'data/info.php?pageNum='+pno,
        success:function(pager){
            var html='';
            console.log(pager);
            console.log(typeof (pager))
            // pager=$.parseJSON(pager);
            console.log(pager);
            $.each(pager.data,function (i,p) {
                html +=`<tr>
                    <td>${p.id}</td>
                    <td>${p.name}</td>
                    <td>${p.sex}</td>
                    <td>${p.age}</td>
                    <td>${p.phone}</td>
                    <td>${p.email}</td>
                    <td>${p.hobby}</td>
                    <td>${p.skill}</td>
                </tr>`;
                console.log(html);
            });
            $('.container tbody').html(html);
        },
        error:function(){
            alert("请求出错！")
        }
    });
}