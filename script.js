try {
    import("./js/models.js")
        .then(() => import("./js/utils.js"))
        .then(() => import("./js/storage.js"))
        .then(() => import("./js/editor.js"))
        .then(() => import("./js/gacha.js"))
        .then(() => import("./js/collection.js"))
        .then(() => import("./js/animation.js"))
        .then(() => import("./js/app.js"))
        .catch(error => {

            alert(error);

            console.error(error);

        });

} catch (error) {

    alert(error);

}
