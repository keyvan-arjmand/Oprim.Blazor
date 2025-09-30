window.loadingDashboard = () => {
    function showLoader() {
        $("#global-loader").fadeIn("slow");
    }

    function hideLoader() {
        $("#global-loader").fadeOut("slow");
    }

    hideLoader();
};