import bcrypt from "bcrypt";

export const hashPass = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (err) {
    throw err;
  }
};
