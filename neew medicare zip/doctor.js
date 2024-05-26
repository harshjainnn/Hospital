document.getElementById('specialty-filter').addEventListener('change', function() {
    const selectedSpecialty = this.value;
    const doctorProfiles = document.querySelectorAll('.doctor-profile');

    doctorProfiles.forEach(profile => {
        if (selectedSpecialty === 'all' || profile.getAttribute('data-specialty') === selectedSpecialty) {
            profile.style.display = ''; 
        } else {
            profile.style.display = 'none'; 
        }
    });
});
