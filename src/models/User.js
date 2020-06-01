class User {
  constructor({
    email, password, name, gender, birthdate, inputBirthdate, bio, school,
    course, grade, schoolClass, shift, inputNumber, contacts, prefs,
  }) {
    this.email = email || '';
    this.password = password || '';

    this.name = name || '';
    this.gender = gender || '';
    this.birthdate = birthdate || '';
    this.inputBirthdate = inputBirthdate || '';
    this.bio = bio || '';

    this.school = school || '';
    this.course = course || '';
    this.grade = grade || '';
    this.schoolClass = schoolClass || '';
    this.shift = shift || '';

    this.inputNumber = inputNumber || '';
    this.contacts = contacts || {
      instagram: '',
      facebook: '',
      number: '',
      twitter: '',
    };


    this.prefs = prefs || {
      gender: '',
      school: '',
      course: '',
      grade: '',
    };
  }

  getUser() {
    const res = {
      name: this.name,
      gender: this.gender,
      birthdate: this.birthdate,
      bio: this.bio,
      email: this.email,
      contacts: this.contacts,
      school: this.school,
      grade: this.grade,
      school_class: this.schoolClass,
      course: this.course,
      password: this.password,
      shift: this.shift,
      prefs: {
        school: this.prefs.school,
        gender: this.prefs.gender,
        grade: this.prefs.grade,
        course: this.prefs.course,
      },
    };

    return res;
  }
}

export default User;
