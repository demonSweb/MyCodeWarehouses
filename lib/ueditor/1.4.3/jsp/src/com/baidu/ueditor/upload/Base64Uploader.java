�}��  
  �N#�'����  	=g�;��=���L������Vc�ê}��(��*�E��o�z�Y� ��'w��3�t�s|�, fdݍۺz�V�Ƴ��<���|�jg��f��m@lG���}��B��8�X_��q=9f�����b�ְ�?�ZMoWB��@T����M���tTZ�:B;�%��=)��V^J4�L�Xj�w17@t�L��r�`��~-�M'�j�aY��l�\���wlc8^��n3v����a��p5KA&�$�$,Z��]&��$�wč�w��E���B9B0���>��(`a�����w�L���o0�5-��J��*#�m5��!�훒x�(��ʈn���*���b�N���k+�6�۞qÈ���al�+��M��( ����x ǵsg#�̚��vȂ1�3��#M�����/�u.��$���+��ڹ�|�s"�_۷����4��*pɅ��Ye����xc�Vδ�l�/��D�1���L���GiG �� Tݡ��9M� �����"�n�\�X��XF�cʤ"�_x����ex[�A�&�'�b(�ǆ}���x�ד	 8���l����@�={��T��:�����
��*�G��?��mNH�}��+���6m2�5[́��O�T4����$9�Gi,�v�1�������L"ֿu�l�A���Jv�~��zr��5,���h���N�c`zmK����=Z=�D1G��MxL��G�#f��f�,t45�ei�����os��Ӥ+<'�z����m�C3U�C�,3=�߀�L�h)k j1�"�ݏ����C�J�ȑ=k�>�h0��%�:��I�G٩}Lt0�PCfr�sF�{R�]c���-�=2z��섭�5<��A�}%��D)C%4��0��K��_y�r�%��7��Ii	��3��1����ɦ��qt�KJb&��B���))w���Mkq��\�j��xP�x�S��N���07?q-3��g�J���}f�Kurl", PathFormat.format(savePath));
			storageState.putInfo("type", suffix);
			storageState.putInfo("original", "");
		}

		return storageState;
	}

	private static byte[] decode(String content) {
		return Base64.decodeBase64(content);
	}

	private static boolean validSize(byte[] data, long length) {
		return data.length <= length;
	}
	
}