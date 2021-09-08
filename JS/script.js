$(function () {
    $('.close-menu').click(function () {
        $('.menu-links').css({
            transform: 'translate(100%, 100%)'
        });
        // bottom right
        // $('.menu-links').css({
        //      transform: 'translate(0%, 100%)'
        //  });
        //  bottom
        // $('.menu-links').css({
        //     transform: 'translate(100%, 0%)'
        // });
        // right
        // $('.menu-links').css({
        //     transform: 'translate(-100%, 0%)'
        // });
        // LEFT
        // $('.menu-links').css({
        //         transform: 'translate(0%, -100%)'
        //     });
        //     TOP
        // $('.menu-links').css({
        //             transform: 'translate(-100%, -100%)'
        //         });
        //         LEFT TOP
        // $('.menu-links').css({
        //     transform: 'translateY(-100%)'
        // })
    });
    $('.open-menu').click(function () {
        $('.menu-links').css({
            transform: 'translate(0, 0%)'
        });
        setTimeout(() => {
            $('.menu-links').css({
                background: `rgb(${col1}, ${col2}, ${col3})`
            });
            $('.menu-links li a').css({
                'text-shadow': '2px 2px 10px black'
            });
        }, 100);

        function rad1() {
            return Math.floor(Math.random() * (255 - 1) + 1)
        }

        function rad2() {
            return Math.floor(Math.random() * (255 - 1) + 1)
        }

        function rad3() {
            return Math.floor(Math.random() * (255 - 1) + 1)
        }
        let col1 = rad1();
        let col2 = rad2();
        let col3 = rad3();
    });

})