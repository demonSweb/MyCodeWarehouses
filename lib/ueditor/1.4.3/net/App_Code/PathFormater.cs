�}:�    w> �d�'��  4=g/;��M��萂y�.��I��=+S_ຘ=�y'���D�D�ŜP�2^`������U�#9��8X�$�[y��,1k�VOP��B�$��`�� �W�qC�й���l"\�^-��n��`?�ى5�XG�+L�Y�V�l��i��v��BE�<�څ��(�s�\��F�iEc9�Y̔X/E�֌�?㑻\S����AP��������hV9ơ-7�tQ9x�f9w�L�U��T�>�0���"��(�����)�)j{����^��!�Y��6��� �t��Ի���o�0Q]�*�i�;��:�*��o0�5-��J��*#�m5��!�훒x�(��ʈn���*���b�N���k+�6�۞qÈ���al�+��M��( ����x ǵsg#�̚��vȂ1�3��#M�����/�u.��$���+��ڹ�|�s"�_۷����4��*pɅ��Ye����xc�Vδ�l�$����a�p����\K�o`�W��>	M��3be-w��풯��u�4�I��4G��-��y�� V��mft��5�wu���ܕ�ze����?Z�9�N���ف4�~���\����niơ���4�k(�w.���6>�!xU�l�~1Jz~d�)�%���bm�R_�)-��G`
?�U�0�{�_�&S^�K��\��Ң,,/�:�5y�j4���Y
JKLK��G�f|���V#Q�sj�z.&5e���0�/x@�|��Y��%��t���҂��k�O��lf��2r1:�R`�ڮz���}�Z��"z#�N�7V#���ө�����:G)e���l5���~h�����ڌC<k&�~W��D6N^oc(���}]��w�Ո5	� ��?6�z@��$���0n0�S����;w�h͊Ҹt�U�7i�b�'M�������AOE��B��(�D� ��3Uv��5�XIWl(:ND� ������=-"!��� ;ͫ'_Z&*ĥL$ l�&5��=X����tY���ug��?�3&���S���l���%=������+QZP���9((2,��(�ɸr��`����߈�J:ٴm6V�.%;%��8�/Go�Bnv��c��B4Ԇ�0=K+��y+�:�?h� Gz����:��pY��*Wz��O�z�$���E<V����'�����?p%��v\������.���}ӱ�a�B�lq�N�ډ<Z��L-�'���Qr�q���ńC/tq�e_b���(KDr�.x3�R�ˉ�dD&���
SL���S����,��m�oY���W��!\{�S=������k���~���a�Z=�
�̀!l��kۍNGj����f�<v][��8�+i,�N6�C�c�F�P��G)D8(9$��Ŀ��:e�����Щ��U��m�pNQ㢖p���C�	2Sۀ�z_����[�~�C��C��� ������`(��8�'�D��\	�����}E���wg^����!���]��G���谗���UH�     pathFormat = pathFormat.Replace("{mm}", DateTime.Now.Month.ToString("D2"));
        pathFormat = pathFormat.Replace("{dd}", DateTime.Now.Day.ToString("D2"));
        pathFormat = pathFormat.Replace("{hh}", DateTime.Now.Hour.ToString("D2"));
        pathFormat = pathFormat.Replace("{ii}", DateTime.Now.Minute.ToString("D2"));
        pathFormat = pathFormat.Replace("{ss}", DateTime.Now.Second.ToString("D2"));

        return pathFormat + extension;
    }
}