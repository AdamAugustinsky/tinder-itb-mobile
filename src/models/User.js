class User {
  constructor() {
    this.email = '';
    this.password = '';

    this.name = '';
    this.gender = '';
    this.birthdate = '';
    this.inputBirthdate = '';
    this.bio = '';

    this.school = '';
    this.course = '';
    this.grade = '';
    this.schoolClass = '';
    this.period = '';

    this.inputNumber = '';
    this.contacts = {
      instagram: '',
      facebook: '',
      number: '',
      twitter: '',
    };


    this.prefs = {
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
      period: this.period,
      prefs: {
        school: this.prefs.school,
        gender: [this.prefs.gender],
        grade: [this.prefs.grade],
        course: [this.prefs.course],
      },
    };

    return res;
  }
}

export default User;
