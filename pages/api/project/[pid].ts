// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

type ProjectList = {
    [key: string] : Data
}

const EXISTING_PROJECTS: ProjectList = {
    "Juanitor": {
      name: "Juanitor"
    },
    "MA": {
      name: "Marianne Alliot"
    },
    "Symfony": {
      name: "Paquito"
    }
  }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const projectID = req.query.pid as string;
    if (projectID in EXISTING_PROJECTS) {
        const data: Data = EXISTING_PROJECTS[projectID];
        return res.status(200).json(data);
    } else {
        return res.status(404).json({name: ""});
    }
}
