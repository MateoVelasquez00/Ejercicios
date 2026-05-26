class Usuario{
    constructor(nome, email, contrasena){
        this.nome = nome;
        this.email = email;
        this.contrasena = contrasena;
    }

    obtenerInformacion(){
        return `Nombre: ${this.nome} | Email: ${this.email} | Contrasena: ${this.contrasena}`;
    }

    validarDatos(){
        const regexContrasena = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

        const contrasenaValida = regexContrasena.test(this.contrasena);

        return {
            contrasenaOk: contrasenaValida
        };
    }

}

const usuario1 = new Usuario("Carlos Mendoza", "carlos@mail.com", "Admin123*");
console.log(usuario1.validarDatos());

const usuario2 = new Usuario("Carlos Mendoza", "carlos@mail.com", "admin123*");
console.log(usuario2.validarDatos());