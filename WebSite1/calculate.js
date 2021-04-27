function bill()
{
	var netamt=0,tsgst=0,tcgst=0,total=0;
	var a=parseInt(document.f1.t1.value);
	if(document.getElementById('tea').checked)
	{
		
		netamt=netamt+(a*10);
	}
	var a=parseInt(document.f1.t2.value);
	if(document.getElementById('cofee').checked)
	{
		
		netamt=netamt+(a*20);
	}
	var a=parseInt(document.f1.t3.value);
	if(document.getElementById('pepsi').checked)
	{
		
		netamt=netamt+(a*50);
	}
	var a=parseInt(document.f1.t4.value);
	if(document.getElementById('sprite').checked)
	{
		
		netamt=netamt+(a*50);
	}
	var a=parseInt(document.f1.t5.value);
	if(document.getElementById('coca').checked)
	{
		
		netamt=netamt+(a*50);
	}
	var a=parseInt(document.f1.t6.value);
	if(document.getElementById('bottle').checked)
	{
		
		netamt=netamt+(a*20);
	}
	var a=parseInt(document.f1.t7.value);
	if(document.getElementById('chips').checked)
	{
		
		netamt=netamt+(a*10);
	}
	document.getElementById('amount').value=netamt;
	tcgst=(.18 * netamt);
	document.getElementById('cgst').value=tcgst;
	tsgst=(.18 * netamt);
	document.getElementById('sgst').value=tsgst;
	total=netamt+tcgst+tsgst;
	document.getElementById('net').value=total;

}
