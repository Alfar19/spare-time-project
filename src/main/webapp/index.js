let lastShownSheet = 'about_me';

function toggleSheet(card_class) {
    let whiteSheetClasses = document.querySelector('.inner_white_sheet').classList;

    if (whiteSheetClasses.contains('slideRight-' + lastShownSheet)) {
        whiteSheetClasses.remove('slideRight-' + lastShownSheet);
        whiteSheetClasses.add('slideLeft-' + lastShownSheet);
        lastShownSheet = card_class;
    }
    setTimeout(() => {
        whiteSheetClasses.add('slideRight-' + lastShownSheet);
        whiteSheetClasses.forEach((className) => {
            if (className.startsWith('slideLeft')) {
                whiteSheetClasses.remove(className);
            }
        });
    }, 1500);
}