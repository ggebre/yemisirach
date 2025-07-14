export type Link = {
  title: string;
  destination: string;
};

export type contact = {
  name: string;
  email: string;
};

export type eldersData = {
  name: string;
  position: string;
  description: string;
  image_url: string;
}

export type minihero = {
  title: string;
  image: string;
  description: string;
}

export type eventDataType = {
      _id: string;
      title: string;
      date: string;
      time: string;
      location: string;
      category: string;
      image: string;
      description:string;
      featured: boolean;
      // link: string;
}

export type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
export type prayerType = {
  name: string;
  email: string;
  phone: string;
  prayerRequest: string;
}

export type sermonType = {
    title: string;
    date: string;
    speaker: string;
    series: string;
    videoUrl: string;
    audioUrl: string;
    notesUrl: string;
    description: string;
}