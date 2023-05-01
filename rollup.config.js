import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import terser from '@rollup/plugin-terser';

export default [
    {
        input: 'src/index.js',
        output: [
            {
                file: 'dist/umd/index.umd.js',
                format: 'umd',
                name: 'LNR',
                sourcemap: true
            },
            {
                file: 'dist/umd-min/index.umd.min.js',
                format: 'umd',
                name: 'LNR',
                // sourcemap: true,
                plugins: [terser()]
            },
            {
                file: 'dist/es/index.es.js',
                format: 'es',
                sourcemap: true
            },
            {
                file: 'dist/cjs/index.cjs.js',
                format: 'cjs',
                sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-env']
            })
        ]
    }
];