import routes/text
import gleam/string as string_mod

pub type Yeet {
  Yooter
  Yater(Int)
  Yoinker(String)
}

pub fn do_thing(input: String) -> Result(Yeet, String) {
  case input {
    input if input == "yooter" -> Ok(Yooter)
    input if input == "yater" -> Ok(Yater(10))
    other -> Error(other)
  }
}

// TODO a String cannot be used in module constants?
// pub const greeting = concat(["✨ Hello, world! ✨ ", text.docs])
//                      ^^^^^^ This type is not allowed in module constants.
// pub const greeting = append("✨ Hello, world! ✨ ", text.docs)
pub fn greeting() {
  // TODO I get a "Error: No case clause matched" when doing...
  // string.append("✨ Hello, world! ✨ ", text.docs)
  // Renaming the module works, however
  string_mod.append("✨ Hello, world! ✨ ", text.docs)
}
