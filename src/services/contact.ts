import { api } from "./api";

type ContactDTO = {
  name: string;
  email: string;
  message: string;
  customId?: string;
};

type ContactGetResponse = {
  list: { id: number } & ContactDTO;
};

export const addNewContact = async (data: ContactDTO) => {
  try {
    const response = await api.sendData<
      ContactGetResponse,
      { list: ContactDTO }
    >("contact/list", {
      list: {
        customId: Date.now().toString(),
        ...data,
      },
    });
    return response.list;
  } catch (err) {
    console.error(err);
  }
};
