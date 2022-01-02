import * as yup from "yup";

export const FilterSchema = yup.object().shape({
  productName: yup.string(),
  lowestPrice: yup
    .number()
    .notRequired()
    .min(0, "Yüksek bir değer girin!")
    .max(100000, "Az bir değer girin!")
    .nullable(true)
    .transform((_, val) => (val === val ? Number(val) : null)),
  highestPrice: yup
    .number()
    .notRequired()
    .min(0, "Yüksek bir değer girin!")
    .max(100000, "Az bir değer girin!")
    .nullable(true)
    .transform((_, val) => (val === val ? Number(val) : null)),
});
