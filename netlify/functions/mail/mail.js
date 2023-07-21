const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  auth: {
    user: process.env.SENDINBLUE_USERNAME,
    pass: process.env.SENDINBLUE_PASSWORD,
  },
});

const response = (statusCode, body) => {
  return {
    statusCode: statusCode,
    body: JSON.stringify(body),
  };
};

const prepareContent = (data) => {
  let text = "Nowe zgłoszenie\n\n";
  if (data.owners_name)
    text += "Imie i nazwisko właściciela: " + data.owners_name + "\n";
  if (data.pets_name)
    text += "Imie i nazwisko pupila: " + data.pets_name + "\n";
  if (data.email) text += "Adres email: " + data.email + "\n";
  if (data.phone_number) text += "Numer telefonu: " + data.phone_number + "\n";
  if (data.message) text += "Treść wiadomości:\n" + data.message;

  return text;
};

const validateRequestData = (data) => {
  let error = false;
  const errorBag = {};

  if (!data.owners_name || !data.owners_name.length) {
    error = true;
    errorBag.owners_name = "required";
  }

  if (!data.pets_name || !data.pets_name.length) {
    error = true;
    errorBag.pets_name = "required";
  }

  if (!data.email || !data.email.length) {
    error = true;
    errorBag.email = "required";
  } else if (
    !data.email.match(
      /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/
    )
  ) {
    error = true;
    errorBag.email = "not valid";
  }

  if (!data.phone_number || !data.phone_number.length) {
    error = true;
    errorBag.phone_number = "required";
  } else if (
    !data.phone_number.match(
      /^\+?[0-9\s\-()]{8,20}$/
    )
  ) {
    error = true;
    errorBag.phone_number = "not valid";
  }

  if (!data.message || !data.message.length) {
    error = true;
    errorBag.message = "required";
  }

  return {
    error: error,
    errorBag: errorBag,
  };
};

const handler = async (event) => {
  if (event.httpMethod !== "POST")
    return response(405, { message: "Method not allowed." });

  const data = JSON.parse(event.body);

  const validator = validateRequestData(data);
  if (validator.error)
    return response(422, {
      message: "Validation error",
      errorBag: validator.errorBag,
    });

  const content = prepareContent(data);
  try {
    await transporter.sendMail({
      from: "zgloszenia@asdog.pl",
      to: "wiktoriagacek1999@gmail.com",
      subject: "Nowe zgłoszenie",
      text: content,
    });

    return response(200, { message: "Mail has been sent successfuly." });
  } catch (error) {
    return response(400, { message: "Error occured while sending mail." });
  }
};

module.exports = { handler };
