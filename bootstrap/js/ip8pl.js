
document.getElementById("form1").onclick = function(){
  let sdt = document.getElementById("form1").value;
  let money = 8490000;
  let total = (sdt * money).toLocaleString("vi", { style: "currency", currency: "VND" });
  document.getElementById("salary").innerHTML = sdt + " sản phẩm";
  document.getElementById("money").innerHTML = total
  document.getElementById("total_money").innerHTML = total 
}


  