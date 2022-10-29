import type { Options } from 'html2canvas';
import html2canvas from 'html2canvas';
import type { jsPDFOptions } from 'jspdf';
import JsPdf from 'jspdf';
import type { MutableRefObject } from 'react';

type ReactToPdfDownloadContainerProperties = {
  toPdf: () => Promise<void>;
};

type ReactToPdfProperties<ContainerType, TargetType> = {
  canvasOptions?: Partial<Options>;
  downloadContainer: (
    properties: ReactToPdfDownloadContainerProperties
  ) => ContainerType;
  filename: string;
  jsPdfOptions?: Partial<jsPDFOptions>;
  onComplete?: () => void;
  options?: Record<string, string>;
  scale?: number;
  targetReferences: Array<MutableRefObject<TargetType>>;
  x?: number;
  y?: number;
};

export function ReactToPdf<ContainerType, TargetType>({
  filename = 'download.pdf',
  x = 0,
  y = 0,
  canvasOptions = { logging: false, scale: 1, useCORS: true },
  jsPdfOptions,
  downloadContainer,
  onComplete,
  targetReferences,
}: ReactToPdfProperties<ContainerType, TargetType>): ContainerType {
  const toPdf = async (): Promise<void> => {
    for (const targetReference of targetReferences) {
      if (typeof targetReference.current === 'undefined') {
        throw new TypeError('Target reference must be defined.');
      }
    }

    const pdf = new JsPdf(jsPdfOptions);
    for (const [index, targetReference] of targetReferences.entries()) {
      // eslint-disable-next-line no-await-in-loop
      const canvasElement = await html2canvas(
        targetReference.current as unknown as HTMLElement,
        canvasOptions
      );

      const imageData = canvasElement.toDataURL();

      pdf.addImage(imageData, 'JPEG', x, y, 0, 0, undefined, 'SLOW');

      if (index !== targetReferences.length - 1) {
        pdf.addPage();
      }
    }

    pdf.save(filename);

    if (typeof onComplete !== 'undefined') {
      onComplete();
    }
  };

  return downloadContainer({ toPdf });
}
