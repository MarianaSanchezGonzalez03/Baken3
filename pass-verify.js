const bcrypt = require('bcrypt')

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$JCn7qFDvcJcMIMesHehqIOzYRg5BsqIEl4P4U1ptSV8i1pgfg9zxG';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
