

    
  function tongdonhang(){
    var tongdh = $('#total_money')
    var giohang = $('.spcuagiohang')
    var tong = 0
    for (let i = 0; i < giohang.length; i++) {
        tong += eval(giohang.eq(i).find('.gia').text())
    }
    tongdh.$('#total_money').text(tong)
  }