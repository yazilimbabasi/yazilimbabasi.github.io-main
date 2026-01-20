document.addEventListener('DOMContentLoaded', () => {
    const imageElement = document.getElementById('currentImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Fotoğraf yollarını buraya el ile eklemelisin.
    // Eğer bir sunucu kullanıyorsan, bu listeyi sunucudan dinamik olarak alabilirsin.
    // Şimdilik, "photos" klasöründeki örnek fotoğrafları varsayalım.
    const imagePaths = [
        'foto1.jpg',
        'foto2.jpg',
        'foto3.jpg',
        'foto4.jpg',
        'foto5.jpg',
        'foto6.jpg',
        'foto7.jpg',
        'foto8.jpg',
        'foto9.jpg',
        'foto10.jpg',
        'foto11.jpg',
        'foto12.jpg',
        'foto13.jpg',
        'foto14.jpg',
        'foto15.jpg',
        'foto16.jpg',
        'foto17.jpg',
        'foto18.jpg',
        'foto19.jpg',
        'foto20.jpg',
        'foto21.jpg',
        'foto22.jpg',
        'foto23.jpg',
        'foto24.png',
        'foto25.png',
        'foto26.png',
        'foto27.png',
        'foto28.png',
        'foto29.png',
        'foto30.png',
        'foto31.png',
        'foto32.png',


        // Buraya diğer fotoğraflarının yollarını ekle
    ];

    let currentIndex = 0;

    function loadImage(index) {
        if (imagePaths.length === 0) {
            imageElement.src = '';
            imageElement.alt = 'Gösterilecek fotoğraf yok.';
            return;
        }
        imageElement.src = imagePaths[index];
        imageElement.alt = `Galeri Fotoğrafı ${index + 1}`;
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % imagePaths.length;
        loadImage(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
        loadImage(currentIndex);
    }

    // Buton tıklamaları
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    // Klavye olayları (sol ve sağ ok tuşları)
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            showPrevImage();
        } else if (event.key === 'ArrowRight') {
            showNextImage();
        }
    });

    // Sayfa yüklendiğinde ilk fotoğrafı göster
    loadImage(currentIndex);
});