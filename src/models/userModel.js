import { Schema, model } from "mongoose";

const UserSchema = Schema(
  {
    full_name: { type: Schema.Types.String },
    age: { type: Schema.Types.Number },
    email: { type: Schema.Types.String, require: true },
    phone_number: {
      type: Schema.Types.String,
      require: [true, "Phone number is required"],
    },
    gender: { type: Schema.Types.String, enum: ["Male", "Female", "Others"] },
    password: { type: Schema.Types.String },
    is_active: { type: Schema.Types.Boolean, default: true },
    is_deleled: { type: Schema.Types.Boolean, default: false },
  },
  { timestamps: true } // createdAt, updatedAt
);

const UserModel = model("User", UserSchema);

export { UserModel };
