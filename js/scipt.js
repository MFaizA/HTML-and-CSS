//Event pada saat link di klik

$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');

	//tangkap elemen yang bersangkutan
	var elemenTujuan = $(tujuan);

	//Pindahkan scorll
	$('body').animate({
		scrollTop: elemenTujuan.offset().top
	});



});
