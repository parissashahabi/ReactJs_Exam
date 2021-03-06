// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IUser } from "../../types/user";

const bax: IUser[] = [
  {
    name: "Amir",
  },
  {
    name: "Ali",
  },
  {
    name: "Parisa",
  },
  {
    name: "Mohamad",
  },
];

export default (req: NextApiRequest, res: NextApiResponse<IUser[]>) => {
  res.status(200).json(bax);
};
