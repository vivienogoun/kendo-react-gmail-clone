import { ListBoxItemClickEvent } from "@progress/kendo-react-listbox";
import { create } from "zustand";
import { from, to } from "./constants";

export interface Mail {
  id: number;
  selected: boolean;
  from: { image?: string; name: string; email: string };
  to: { image?: string; name: string; email: string };
  date: Date | string;
  subject: string;
  message: string;
  read: boolean;
}

interface State {
  mails: Mail[];
  addMail: (mail: Mail) => void;
  handleMailClick: (event: ListBoxItemClickEvent) => void;
}

const initialMails: Mail[] = [
  {
    id: 1,
    date: "2025-03-24T06:54:40.909Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: true,
    selected: false,
    subject: "Welcome",
  },
  {
    id: 2,
    date: "2025-03-24T06:55:19.365Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: true,
    selected: false,
    subject: "Welcome",
  },
  {
    id: 3,
    date: "2025-03-24T06:55:20.148Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: true,
    selected: false,
    subject: "Welcome",
  },
  {
    id: 4,
    date: "2025-03-24T06:55:20.678Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: true,
    selected: false,
    subject: "Welcome",
  },
  {
    id: 5,
    date: "2025-03-24T06:55:21.047Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: true,
    selected: true,
    subject: "Welcome",
  },
  {
    id: 6,
    date: "2025-03-24T06:55:21.367Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: true,
    selected: false,
    subject: "Welcome",
  },
  {
    id: 7,
    date: "2025-03-24T06:55:21.626Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: false,
    selected: false,
    subject: "Welcome",
  },
  {
    id: 8,
    date: "2025-03-24T06:55:21.902Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: true,
    selected: false,
    subject: "Welcome",
  },
  {
    id: 9,
    date: "2025-03-24T06:55:22.185Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: false,
    selected: false,
    subject: "Welcome",
  },
  {
    id: 10,
    date: "2025-03-24T06:55:22.591Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: false,
    selected: false,
    subject: "Welcome",
  },
  {
    id: 11,
    date: "2025-03-24T06:55:25.808Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: true,
    selected: false,
    subject: "Welcome",
  },
  {
    id: 12,
    date: "2025-03-24T06:55:25.967Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: false,
    selected: false,
    subject: "Welcome",
  },
  {
    id: 13,
    date: "2025-03-24T06:55:26.121Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: false,
    selected: false,
    subject: "Welcome",
  },
  {
    id: 14,
    date: "2025-03-24T06:55:26.293Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: false,
    selected: false,
    subject: "Welcome",
  },
  {
    id: 15,
    date: "2025-03-24T06:55:26.465Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: false,
    selected: false,
    subject: "Welcome",
  },
  {
    id: 16,
    date: "2025-03-24T06:55:26.635Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: false,
    selected: false,
    subject: "Welcome",
  },
  {
    id: 17,
    date: "2025-03-24T06:55:26.814Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: false,
    selected: false,
    subject: "Welcome",
  },
  {
    id: 18,
    date: "2025-03-24T06:55:26.979Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: false,
    selected: false,
    subject: "Welcome",
  },
  {
    id: 19,
    date: "2025-03-24T06:55:27.131Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: false,
    selected: false,
    subject: "Welcome",
  },
  {
    id: 20,
    date: "2025-03-24T06:55:27.339Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: false,
    selected: false,
    subject: "Welcome",
  },
  {
    id: 21,
    date: "2025-03-24T06:55:27.500Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: false,
    selected: false,
    subject: "Welcome",
  },
  {
    id: 22,
    date: "2025-03-24T06:55:27.689Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: false,
    selected: false,
    subject: "Welcome",
  },
  {
    id: 23,
    date: "2025-03-24T06:55:27.860Z",
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
    message:
      "Subject: Welcome to Our Service – Let's Get Started!\n\nHi [Name],\n\nWe’re thrilled to welcome you to [Your Company]! Thank you for joining us—we're excited to have you on board.\n\nAt [Your Company], we strive to provide the best experience possible, and we can't wait for you to explore everything we have to offer. Whether you're here to [mention key benefit or feature], or just getting started, we're here to help.\n\nTo get the most out of your experience, we recommend starting with these simple steps:\n\nExplore Your Dashboard – Log in to your account and check out your personalized dashboard.\n\nComplete Your Profile – Updating your details will help you get the best recommendations.\n\nJoin Our Community – Connect with other users and stay updated with the latest news.\n\nClick the link below to get started:\n\n👉 Get Started Now\n\nIf you have any questions or need assistance, feel free to reply to this email or visit our Help Center. Our support team is always ready to assist you.\n\nWe’re so happy to have you with us, and we look forward to seeing all the amazing things you’ll do with [Your Company].\n\nBest Regards,\nThe [Your Company] Team\n\n© 2025 Your Company. All rights reserved.",
    read: false,
    selected: false,
    subject: "Welcome",
  },
];

export const SELECTED_FIELD = "selected";

export const useStore = create<State>()((set) => ({
  mails: initialMails,
  addMail: (mail) => set((state) => ({ mails: [...state.mails, mail] })),
  handleMailClick: (event) =>
    set((state) => ({
      mails: state.mails.map((item) => {
        if (item.id === event.dataItem.id) {
          item.read = true;
          item[SELECTED_FIELD] = !item[SELECTED_FIELD];
        } else if (!event.nativeEvent.ctrlKey) {
          item[SELECTED_FIELD] = false;
        }
        return item;
      }),
    })),
}));
