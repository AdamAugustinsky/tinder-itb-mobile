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
      nome: this.name,
      genero: this.gender,
      data_nascimento: this.birthdate,
      bio: this.bio,
      email: this.email,
      contatos: this.contacts,
      escola: this.school,
      ano: this.grade,
      sala: this.schoolClass,
      curso: this.course,
      password: this.password,
      periodo: this.period,
      prefs: {
        escola: this.prefs.school,
        generos: [this.prefs.gender],
        anos: [this.prefs.grade],
        cursos: [this.prefs.course],
      },
    };

    return res;
  }
}

export default User;
