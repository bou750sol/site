document.addEventListener('DOMContentLoaded', () => {
    //background music (backgroundAudio)
    document.addEventListener('DOMContentLoaded', () => {
        const audioElement = document.getElementById('backgroundAudio');
        audioElement.volume = 0.7;
    });

    //copy address (canav)
    const copyText = '29QWhLCZVSATFy75HYW5qAraojTUnvHjLu1qm2kNpump'; //paste here new CA
    const copyAddressElement = document.querySelector('.canav');
    const copyAlertI = document.getElementById('copyAlertI');

    copyAddressElement.addEventListener('click', () => {
        const tempInput = document.createElement('input');
        tempInput.value = copyText;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        copyAlertI.style.display = 'block';

        setTimeout(() => {
            copyAlertI.style.display = 'none';
        }, 2000);
    });

    //banner
    const bannerTextI = document.getElementById('bannerTextI');
    const originalTextI = bannerTextI.innerHTML;

    bannerTextI.addEventListener('mouseover', () => {
        bannerTextI.innerHTML = "$BOU750 IS FOR WINNERS";
        bannerTextI.style.color = "#ff8000";
    });

    bannerTextI.addEventListener('mouseout', () => {
        bannerTextI.innerHTML = originalTextI;
        bannerTextI.style.color = "#fff";
    });
});
