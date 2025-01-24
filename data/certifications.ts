import type { Certification } from "types/Sections";

const certificationsList: Certification[] = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect – Associate",
    subtitle: "Amazon Web Services (AWS)",
    url: "https://www.credly.com/badges/da24d87e-4a4d-49a7-9c25-297c646172d0?source=linked_in_profile",
    isAWS: true,
    validUntil: "2026",
  },
  {
    id: 2,
    title: "AWS Certified Developer – Associate",
    subtitle: "Amazon Web Services (AWS)",
    url: "https://www.credly.com/badges/f7362a39-8446-4401-8814-fb61654b232b/linked_in_profile",
    isAWS: true,
    validUntil: "Dec, 2025",
  },
  {
    id: 3,
    title: "AWS Community Builder - Serverless",
    subtitle: "Amazon Web Services (AWS)",
    url: "https://aws.amazon.com/developer/community/community-builders/community-builders-directory/?cb-cards.sort-by=item.additionalFields.cbName&cb-cards.sort-order=asc&awsf.builder-category=*all&awsf.location=*all&awsf.year=*all&cb-cards.q=Rahul%2Bladumor&cb-cards.q_operator=AND",
    isAWS: true,
  },
  {
    id: 4,
    title: "AWS Technical Professional",
    subtitle: "Amazon Web Services (AWS)",
    url: "https://aws.amazon.com/partners/training/",
    isAWS: true,
  },
];

export default certificationsList;
