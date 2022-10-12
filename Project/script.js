const resim = document.getElementById('resim');
const resimdizi = ['300','400','500','600',
                   '700','800','900','1020',
                   '1030','1040','1050','1060'];


for (i = 1; i < 13;) {
    resimdizi.forEach(j => {
    const resim = document.getElementById(`resim${i}`);
        i++;
        resim.src = `https://source.unsplash.com/random/${j}x${j}`;
        console.log(j)
    })
}