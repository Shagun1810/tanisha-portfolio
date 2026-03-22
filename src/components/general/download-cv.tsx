'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/Tanisha_Gupta_Graphic_Designer.pdf', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
