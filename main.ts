const toggleSkillsBtn: HTMLElement = document.getElementById('toggle-skills-btn')!;
const skillsSection: HTMLElement = document.getElementById('skills-section')!;

toggleSkillsBtn.addEventListener('click', () => {
    if (skillsSection.style.maxHeight) {
        skillsSection.style.maxHeight = ''; // collapse
        toggleSkillsBtn.textContent = "Show Skills"; // change button text
        skillsSection.classList.remove('animated');
    } else {
        skillsSection.style.maxHeight = skillsSection.scrollHeight + 'px'; // expand
        toggleSkillsBtn.textContent = "Hide Skills"; // change button text
        skillsSection.classList.add('animated');
    }
});
